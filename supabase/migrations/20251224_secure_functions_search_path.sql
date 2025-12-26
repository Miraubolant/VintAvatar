-- Secure all functions by setting explicit search_path
-- This prevents search path injection attacks

-- =============================================
-- 1. update_updated_at_column
-- =============================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- =============================================
-- 2. generate_referral_code
-- =============================================
CREATE OR REPLACE FUNCTION public.generate_referral_code()
RETURNS TEXT AS $$
DECLARE
    code TEXT;
    code_exists BOOLEAN;
BEGIN
    LOOP
        -- Generate a random 8-character code
        code := upper(substring(gen_random_uuid()::text from 1 for 8));

        -- Check if code already exists
        SELECT EXISTS(SELECT 1 FROM public.affiliations WHERE referral_code = code) INTO code_exists;

        -- Exit loop if code is unique
        IF NOT code_exists THEN
            EXIT;
        END IF;
    END LOOP;

    RETURN code;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- =============================================
-- 3. create_user_affiliation
-- =============================================
CREATE OR REPLACE FUNCTION public.create_user_affiliation()
RETURNS TRIGGER AS $$
BEGIN
    -- Create an affiliation record for new user
    INSERT INTO public.affiliations (referrer_id, referral_code)
    VALUES (NEW.id, public.generate_referral_code());

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- =============================================
-- 4. handle_referral_signup
-- =============================================
CREATE OR REPLACE FUNCTION public.handle_referral_signup(referral_code_param TEXT, new_user_id UUID)
RETURNS VOID AS $$
DECLARE
    referrer_user_id UUID;
BEGIN
    -- Find the referrer by referral code
    SELECT referrer_id INTO referrer_user_id
    FROM public.affiliations
    WHERE referral_code = referral_code_param;

    -- If referrer found, update the affiliation with the new user
    IF referrer_user_id IS NOT NULL THEN
        UPDATE public.affiliations
        SET referred_id = new_user_id
        WHERE referrer_id = referrer_user_id AND referral_code = referral_code_param;
    END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- =============================================
-- 5. handle_new_user
-- =============================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
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
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';
