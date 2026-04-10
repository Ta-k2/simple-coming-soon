/*
  # Create waitlist table for AURA11 early access

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `naam` (text, required) — full name of the subscriber
      - `email` (text, unique, required) — email address
      - `created_at` (timestamptz) — sign-up timestamp

  2. Security
    - Enable RLS on `waitlist` table
    - Allow anyone (anonymous) to insert their own entry
    - No read access for public (admin only via service role)
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  naam text NOT NULL DEFAULT '',
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the waitlist"
  ON waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
