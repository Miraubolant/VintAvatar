-- Migration: Add gallery sharing functionality
-- Allows users to share their generated images publicly in the gallery

-- Add is_public column to usage_tracking for gallery visibility
ALTER TABLE usage_tracking ADD COLUMN IF NOT EXISTS is_public BOOLEAN DEFAULT false;

-- Add gallery_shares_used column to profiles for tracking share limit (max 2)
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS gallery_shares_used INTEGER DEFAULT 0;

-- Create index for efficient gallery queries (only public images, ordered by date)
CREATE INDEX IF NOT EXISTS idx_usage_tracking_public
ON usage_tracking (created_at DESC)
WHERE is_public = true;

-- RLS policy for reading public gallery images (anyone can see public images)
CREATE POLICY "Anyone can view public gallery images"
ON usage_tracking
FOR SELECT
USING (is_public = true);

-- Comment for documentation
COMMENT ON COLUMN usage_tracking.is_public IS 'Whether this generation is shared in the public gallery';
COMMENT ON COLUMN profiles.gallery_shares_used IS 'Number of times user has shared to gallery (max 2)';
