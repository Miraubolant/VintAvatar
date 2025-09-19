-- ASSURER LA TABLE AFFILIATIONS: S'assurer que la table affiliations existe avec la bonne structure

-- Vérifier et corriger la structure de la table affiliations
DO $$ 
BEGIN
    -- Si la table n'existe pas, la créer
    IF NOT EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'affiliations') THEN
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
    ELSE
        -- Si la table existe, s'assurer qu'elle a toutes les colonnes nécessaires
        IF NOT EXISTS (SELECT FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'affiliations' AND column_name = 'user_id') THEN
            ALTER TABLE public.affiliations ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL;
        END IF;
        
        IF NOT EXISTS (SELECT FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'affiliations' AND column_name = 'referral_code') THEN
            ALTER TABLE public.affiliations ADD COLUMN referral_code TEXT UNIQUE NOT NULL;
        END IF;
        
        IF NOT EXISTS (SELECT FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'affiliations' AND column_name = 'referred_by_code') THEN
            ALTER TABLE public.affiliations ADD COLUMN referred_by_code TEXT;
        END IF;
        
        IF NOT EXISTS (SELECT FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'affiliations' AND column_name = 'referred_by_user_id') THEN
            ALTER TABLE public.affiliations ADD COLUMN referred_by_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;
        END IF;
        
        IF NOT EXISTS (SELECT FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'affiliations' AND column_name = 'status') THEN
            ALTER TABLE public.affiliations ADD COLUMN status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed'));
        END IF;
        
        IF NOT EXISTS (SELECT FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'affiliations' AND column_name = 'bonus_awarded') THEN
            ALTER TABLE public.affiliations ADD COLUMN bonus_awarded BOOLEAN DEFAULT FALSE;
        END IF;
        
        IF NOT EXISTS (SELECT FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'affiliations' AND column_name = 'created_at') THEN
            ALTER TABLE public.affiliations ADD COLUMN created_at TIMESTAMPTZ DEFAULT NOW();
        END IF;
        
        IF NOT EXISTS (SELECT FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'affiliations' AND column_name = 'updated_at') THEN
            ALTER TABLE public.affiliations ADD COLUMN updated_at TIMESTAMPTZ DEFAULT NOW();
        END IF;
    END IF;
END $$;

-- Index pour améliorer les performances (avec vérifications d'existence)
DO $$
BEGIN
    IF EXISTS (SELECT FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'affiliations' AND column_name = 'user_id') THEN
        CREATE INDEX IF NOT EXISTS idx_affiliations_user_id ON public.affiliations(user_id);
    END IF;
    
    IF EXISTS (SELECT FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'affiliations' AND column_name = 'referral_code') THEN
        CREATE INDEX IF NOT EXISTS idx_affiliations_referral_code ON public.affiliations(referral_code);
    END IF;
    
    IF EXISTS (SELECT FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'affiliations' AND column_name = 'referred_by_user_id') THEN
        CREATE INDEX IF NOT EXISTS idx_affiliations_referred_by_user_id ON public.affiliations(referred_by_user_id);
    END IF;
END $$;

-- Activer RLS
ALTER TABLE public.affiliations ENABLE ROW LEVEL SECURITY;

-- Policies pour les affiliations
DROP POLICY IF EXISTS "Users can view their own affiliation" ON public.affiliations;
DROP POLICY IF EXISTS "Users can update their own affiliation" ON public.affiliations;
DROP POLICY IF EXISTS "Users can insert their own affiliation" ON public.affiliations;

CREATE POLICY "Users can view their own affiliation" 
ON public.affiliations FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own affiliation" 
ON public.affiliations FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own affiliation" 
ON public.affiliations FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Permissions
GRANT ALL ON public.affiliations TO authenticated;
GRANT SELECT ON public.affiliations TO anon;
GRANT ALL ON public.affiliations TO service_role;

-- Mettre à jour la fonction handle_new_user pour inclure les affiliations
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
    -- Créer le profil
    INSERT INTO public.profiles (id, email, full_name, created_at, updated_at)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
        NOW(),
        NOW()
    );
    
    -- Créer l'affiliation avec un code unique
    INSERT INTO public.affiliations (user_id, referral_code, created_at, updated_at)
    VALUES (
        NEW.id,
        UPPER(SUBSTR(REPLACE(NEW.id::text, '-', ''), 1, 8)),
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
        RAISE WARNING 'Erreur lors de la création du profil/affiliation pour %: %', NEW.id, SQLERRM;
        RETURN NEW;
END;
$$ language plpgsql security definer;

-- Créer les affiliations manquantes pour les utilisateurs existants
DO $$
DECLARE
    user_record RECORD;
    referral_code_value TEXT;
BEGIN
    FOR user_record IN SELECT id, created_at FROM auth.users WHERE id NOT IN (SELECT user_id FROM public.affiliations WHERE user_id IS NOT NULL) LOOP
        referral_code_value := UPPER(SUBSTR(REPLACE(user_record.id::text, '-', ''), 1, 8));
        
        INSERT INTO public.affiliations (user_id, referral_code, created_at, updated_at)
        VALUES (
            user_record.id,
            referral_code_value,
            user_record.created_at,
            NOW()
        );
    END LOOP;
EXCEPTION
    WHEN OTHERS THEN
        RAISE WARNING 'Erreur lors de la création des affiliations manquantes: %', SQLERRM;
END $$;