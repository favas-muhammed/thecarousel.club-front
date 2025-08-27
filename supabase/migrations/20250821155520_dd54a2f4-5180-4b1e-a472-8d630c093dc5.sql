-- Ensure signups table has proper RLS configuration
-- This migration documents and ensures the secure configuration

-- Verify RLS is enabled (should already be enabled)
ALTER TABLE public.signups ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to recreate them with clear documentation
DROP POLICY IF EXISTS "Allow anonymous signups" ON public.signups;

-- Allow anonymous users to insert signup data (required for email collection)
CREATE POLICY "Allow anonymous email signups" 
ON public.signups 
FOR INSERT 
TO anon
WITH CHECK (true);

-- SECURITY NOTE: We intentionally DO NOT create any SELECT policies
-- This prevents anyone from reading email addresses through the API
-- Only database administrators can access this data directly

-- Add comment for documentation
COMMENT ON TABLE public.signups IS 'Email signups table - INSERT only, no SELECT access to prevent email harvesting';