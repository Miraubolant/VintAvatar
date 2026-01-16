-- Fix: Add missing UPDATE policy for usage_tracking
-- Users need to be able to update is_public on their own records

-- Add UPDATE policy so users can update their own usage_tracking records (for is_public)
CREATE POLICY "Users can update own usage"
ON public.usage_tracking
FOR UPDATE
USING (user_id = (select auth.uid()))
WITH CHECK (user_id = (select auth.uid()));

-- Ensure the public gallery policy exists and works for anonymous users too
DROP POLICY IF EXISTS "Anyone can view public gallery images" ON public.usage_tracking;
CREATE POLICY "Anyone can view public gallery images"
ON public.usage_tracking
FOR SELECT
USING (is_public = true);
