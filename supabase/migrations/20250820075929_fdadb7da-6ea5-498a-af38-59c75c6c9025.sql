-- Add RLS policies for the signups table to fix security vulnerability

-- Allow anyone to insert new signups (for the public signup form)
CREATE POLICY "Allow public signups" 
ON public.signups 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Only allow reading signup data for authenticated admin users
-- (You can modify this later when you implement user roles/admin functionality)
CREATE POLICY "Only authenticated users can view signups" 
ON public.signups 
FOR SELECT 
TO authenticated
USING (true);

-- Prevent updates and deletes for security (signups should be immutable)
CREATE POLICY "Prevent signup modifications" 
ON public.signups 
FOR UPDATE 
TO authenticated
USING (false);

CREATE POLICY "Prevent signup deletions" 
ON public.signups 
FOR DELETE 
TO authenticated
USING (false);