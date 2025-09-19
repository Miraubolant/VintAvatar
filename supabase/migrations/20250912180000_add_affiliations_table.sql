-- Create affiliations table for referral system
CREATE TABLE public.affiliations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    referrer_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    referred_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    referral_code VARCHAR(20) UNIQUE NOT NULL,
    status TEXT CHECK (status IN ('pending', 'completed')) DEFAULT 'pending',
    bonus_granted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    UNIQUE(referrer_id, referred_id)
);

-- Create indexes for performance
CREATE INDEX idx_affiliations_referrer_id ON public.affiliations(referrer_id);
CREATE INDEX idx_affiliations_referred_id ON public.affiliations(referred_id);
CREATE INDEX idx_affiliations_referral_code ON public.affiliations(referral_code);
CREATE INDEX idx_affiliations_status ON public.affiliations(status);

-- Enable Row Level Security (RLS)
ALTER TABLE public.affiliations ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Users can only see their own referrals (as referrer or referred)
CREATE POLICY "Users can view own affiliations" ON public.affiliations
    FOR SELECT USING (
        auth.uid() = referrer_id OR 
        auth.uid() = referred_id
    );

-- Users can insert new affiliations as referrer
CREATE POLICY "Users can create own referrals" ON public.affiliations
    FOR INSERT WITH CHECK (auth.uid() = referrer_id);

-- Users can update their own affiliations (mainly for completing referrals)
CREATE POLICY "Users can update own affiliations" ON public.affiliations
    FOR UPDATE USING (
        auth.uid() = referrer_id OR 
        auth.uid() = referred_id
    );

-- Function to generate unique referral code
CREATE OR REPLACE FUNCTION generate_referral_code()
RETURNS TEXT AS $$
DECLARE
    code TEXT;
    exists BOOLEAN;
BEGIN
    LOOP
        -- Generate a random 8-character code
        code := upper(substring(gen_random_uuid()::text from 1 for 8));
        
        -- Check if code already exists
        SELECT EXISTS(SELECT 1 FROM public.affiliations WHERE referral_code = code) INTO exists;
        
        -- Exit loop if code is unique
        IF NOT exists THEN
            EXIT;
        END IF;
    END LOOP;
    
    RETURN code;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to create affiliation for new user
CREATE OR REPLACE FUNCTION create_user_affiliation()
RETURNS TRIGGER AS $$
BEGIN
    -- Create an affiliation record for new user
    INSERT INTO public.affiliations (referrer_id, referral_code)
    VALUES (NEW.id, generate_referral_code());
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create affiliation when user signs up
CREATE TRIGGER create_affiliation_on_signup
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION create_user_affiliation();

-- Function to handle referral signup
CREATE OR REPLACE FUNCTION handle_referral_signup(referral_code_param TEXT, new_user_id UUID)
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
$$ LANGUAGE plpgsql SECURITY DEFINER;