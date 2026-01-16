-- Migration: Add server-side security for gallery sharing
-- Prevents users from bypassing the 2-share limit

-- Function to check and enforce gallery share quota
CREATE OR REPLACE FUNCTION check_gallery_share_quota()
RETURNS TRIGGER AS $$
DECLARE
  current_shares INTEGER;
  max_shares INTEGER := 2;
BEGIN
  -- Only check when is_public is being set to true
  IF NEW.is_public = true AND (OLD.is_public IS NULL OR OLD.is_public = false) THEN
    -- Get current shares count from profile
    SELECT COALESCE(gallery_shares_used, 0) INTO current_shares
    FROM profiles
    WHERE id = NEW.user_id;

    -- Check if user has exceeded quota
    IF current_shares >= max_shares THEN
      RAISE EXCEPTION 'Gallery share quota exceeded. Maximum % shares allowed.', max_shares;
    END IF;

    -- Increment the share counter in profiles
    UPDATE profiles
    SET gallery_shares_used = COALESCE(gallery_shares_used, 0) + 1
    WHERE id = NEW.user_id;

    -- Add 1 credit to user's subscription as reward
    UPDATE subscriptions
    SET credits_remaining = COALESCE(credits_remaining, 0) + 1
    WHERE user_id = NEW.user_id;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger on usage_tracking for gallery sharing
DROP TRIGGER IF EXISTS enforce_gallery_share_quota ON usage_tracking;
CREATE TRIGGER enforce_gallery_share_quota
  BEFORE UPDATE OF is_public ON usage_tracking
  FOR EACH ROW
  EXECUTE FUNCTION check_gallery_share_quota();

-- Add comment for documentation
COMMENT ON FUNCTION check_gallery_share_quota() IS 'Enforces max 2 gallery shares per user and rewards +1 credit per share';
