-- RÉPARATION COMPLÈTE DU SYSTÈME D'AFFILIATIONS
-- Cette migration va s'assurer que tout fonctionne correctement

-- 1. Supprimer la table affiliations existante si elle est corrompue et la recréer
DROP TABLE IF EXISTS public.affiliations CASCADE;

CREATE TABLE public.affiliations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    referral_code TEXT UNIQUE NOT NULL,
    referred_by_code TEXT,
    referred_by_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed')),
    bonus_awarded BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Index pour les performances et contraintes
CREATE UNIQUE INDEX idx_affiliations_user_id_unique ON public.affiliations(user_id);
CREATE INDEX idx_affiliations_referral_code ON public.affiliations(referral_code);
CREATE INDEX idx_affiliations_referred_by_user_id ON public.affiliations(referred_by_user_id);

-- 3. Activer RLS
ALTER TABLE public.affiliations ENABLE ROW LEVEL SECURITY;

-- 4. Policies RLS
CREATE POLICY "Users can view their own affiliation" 
ON public.affiliations FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own affiliation" 
ON public.affiliations FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own affiliation" 
ON public.affiliations FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- 5. Permissions
GRANT ALL ON public.affiliations TO authenticated;
GRANT SELECT ON public.affiliations TO anon;
GRANT ALL ON public.affiliations TO service_role;

-- 6. Supprimer tous les triggers existants sur auth.users
DO $$ 
DECLARE 
    r RECORD;
BEGIN 
    FOR r IN SELECT trigger_name FROM information_schema.triggers 
             WHERE event_object_schema = 'auth' AND event_object_table = 'users'
    LOOP
        EXECUTE 'DROP TRIGGER IF EXISTS ' || quote_ident(r.trigger_name) || ' ON auth.users CASCADE';
    END LOOP;
END $$;

-- 7. Supprimer les anciennes fonctions
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;

-- 8. Créer une nouvelle fonction robuste
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
DECLARE
    referral_code_value TEXT;
BEGIN
    -- Générer un code de parrainage unique
    referral_code_value := UPPER(SUBSTR(REPLACE(NEW.id::text, '-', ''), 1, 8));
    
    -- Créer le profil utilisateur
    INSERT INTO public.profiles (id, email, full_name, created_at, updated_at)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
        NOW(),
        NOW()
    )
    ON CONFLICT (id) DO UPDATE SET
        email = EXCLUDED.email,
        updated_at = NOW();
    
    -- Créer l'affiliation
    INSERT INTO public.affiliations (user_id, referral_code, created_at, updated_at)
    VALUES (
        NEW.id,
        referral_code_value,
        NOW(),
        NOW()
    )
    ON CONFLICT (user_id) DO NOTHING;
    
    RETURN NEW;
EXCEPTION
    WHEN OTHERS THEN
        -- En cas d'erreur, logger mais ne pas faire échouer la création d'utilisateur
        RAISE WARNING 'Erreur lors de la création du profil/affiliation pour %: %', NEW.id, SQLERRM;
        RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 9. Créer le trigger
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 10. Créer les affiliations pour tous les utilisateurs existants
INSERT INTO public.affiliations (user_id, referral_code, created_at, updated_at)
SELECT 
    id,
    UPPER(SUBSTR(REPLACE(id::text, '-', ''), 1, 8)),
    created_at,
    NOW()
FROM auth.users
ON CONFLICT (user_id) DO NOTHING;