-- Fix: Update only ONE subscription when rewarding gallery share credit
-- Previous trigger updated ALL subscriptions for a user

CREATE OR REPLACE FUNCTION check_gallery_share_quota()
RETURNS TRIGGER AS $$
DECLARE
  current_shares INTEGER;
  max_shares INTEGER := 2;
  target_subscription_id UUID;
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

    -- Find the best subscription to add credit to:
    -- Priority 1: First active credit pack with credits > 0
    -- Priority 2: First active credit pack (even with 0 credits)
    -- Priority 3: Any active subscription
    SELECT id INTO target_subscription_id
    FROM subscriptions
    WHERE user_id = NEW.user_id
      AND status = 'active'
    ORDER BY
      CASE WHEN plan_type = 'credits' AND credits_remaining > 0 THEN 0
           WHEN plan_type = 'credits' THEN 1
           ELSE 2
      END,
      created_at DESC
    LIMIT 1;

    -- Add 1 credit to the selected subscription only
    IF target_subscription_id IS NOT NULL THEN
      UPDATE subscriptions
      SET credits_remaining = COALESCE(credits_remaining, 0) + 1
      WHERE id = target_subscription_id;
    END IF;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Comment for documentation
COMMENT ON FUNCTION check_gallery_share_quota() IS 'Enforces max 2 gallery shares per user and rewards +1 credit to first credit pack';
