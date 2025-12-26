-- Optimize RLS policies to use (select auth.uid()) instead of auth.uid()
-- This prevents re-evaluation of the function for each row

-- =============================================
-- SUBSCRIPTIONS TABLE
-- =============================================

DROP POLICY IF EXISTS "Users can view own subscriptions" ON public.subscriptions;
CREATE POLICY "Users can view own subscriptions" ON public.subscriptions
  FOR SELECT USING (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can insert own subscriptions" ON public.subscriptions;
CREATE POLICY "Users can insert own subscriptions" ON public.subscriptions
  FOR INSERT WITH CHECK (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can update own subscriptions" ON public.subscriptions;
CREATE POLICY "Users can update own subscriptions" ON public.subscriptions
  FOR UPDATE USING (user_id = (select auth.uid()));

-- =============================================
-- USAGE_TRACKING TABLE
-- =============================================

DROP POLICY IF EXISTS "Users can view own usage" ON public.usage_tracking;
CREATE POLICY "Users can view own usage" ON public.usage_tracking
  FOR SELECT USING (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can insert own usage" ON public.usage_tracking;
CREATE POLICY "Users can insert own usage" ON public.usage_tracking
  FOR INSERT WITH CHECK (user_id = (select auth.uid()));

-- =============================================
-- PROFILES TABLE
-- =============================================

DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (id = (select auth.uid()));

-- =============================================
-- AFFILIATIONS TABLE
-- =============================================

DROP POLICY IF EXISTS "Users can view their own affiliation" ON public.affiliations;
CREATE POLICY "Users can view their own affiliation" ON public.affiliations
  FOR SELECT USING (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can update their own affiliation" ON public.affiliations;
CREATE POLICY "Users can update their own affiliation" ON public.affiliations
  FOR UPDATE USING (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can insert their own affiliation" ON public.affiliations;
CREATE POLICY "Users can insert their own affiliation" ON public.affiliations
  FOR INSERT WITH CHECK (user_id = (select auth.uid()));
