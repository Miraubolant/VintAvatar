-- RESTAURATION PROPRE: Remettre la base de données dans l'état original
-- Supprimer tous les éléments problématiques et reconstruire proprement

-- 1. Nettoyer tous les triggers existants sur auth.users
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

-- 2. Supprimer toutes les fonctions liées
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;
DROP FUNCTION IF EXISTS handle_new_user() CASCADE;

-- 3. Nettoyer et recréer la table profiles proprement
DROP TABLE IF EXISTS public.profiles CASCADE;

CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT,
    full_name TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Activer RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 5. Policies propres et simples
CREATE POLICY "Users can view their own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = id);

-- 6. Permissions appropriées
GRANT ALL ON public.profiles TO authenticated;
GRANT SELECT ON public.profiles TO anon;
GRANT ALL ON public.profiles TO service_role;

-- 7. Fonction simple et robuste pour gérer les nouveaux utilisateurs
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, created_at, updated_at)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
        NOW(),
        NOW()
    );
    RETURN NEW;
EXCEPTION
    WHEN unique_violation THEN
        -- Si le profil existe déjà, ne rien faire
        RETURN NEW;
    WHEN OTHERS THEN
        -- En cas d'erreur, logger et continuer
        RAISE WARNING 'Erreur lors de la création du profil pour %: %', NEW.id, SQLERRM;
        RETURN NEW;
END;
$$ language plpgsql security definer;

-- 8. Trigger propre et sécurisé
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 9. Créer les profils manquants pour les utilisateurs existants
INSERT INTO public.profiles (id, email, full_name, created_at, updated_at)
SELECT 
    id,
    email,
    COALESCE(raw_user_meta_data->>'full_name', ''),
    created_at,
    NOW()
FROM auth.users
WHERE id NOT IN (SELECT id FROM public.profiles)
ON CONFLICT (id) DO NOTHING;