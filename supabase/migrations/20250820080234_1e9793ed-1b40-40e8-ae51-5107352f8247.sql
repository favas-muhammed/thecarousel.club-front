-- Fix security vulnerability: Remove overly permissive SELECT policy
DROP POLICY "Only authenticated users can view signups" ON public.signups;

-- Add secure policy that denies all SELECT access to signup emails
-- This prevents any user from harvesting email addresses
-- Admin access should be done through Supabase dashboard or backend functions
CREATE POLICY "Deny public access to signup data" 
ON public.signups 
FOR SELECT 
TO anon, authenticated
USING (false);

-- Keep the secure INSERT policy for the signup form
-- Keep the secure UPDATE/DELETE prevention policies