-- Populate affiliation codes for existing users who don't have them

-- Insert affiliation records for users who don't have them yet
INSERT INTO public.affiliations (referrer_id, referral_code)
SELECT 
    au.id as referrer_id,
    upper(substring(gen_random_uuid()::text from 1 for 8)) as referral_code
FROM auth.users au
LEFT JOIN public.affiliations aff ON au.id = aff.referrer_id
WHERE aff.referrer_id IS NULL
  AND au.id IS NOT NULL;