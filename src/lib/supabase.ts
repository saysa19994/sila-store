import { createClient } from '@supabase/supabase-js';

// Final Production Build: Connected to Sila Supabase Project
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase credentials missing! Ensure environment variables are set to 'Production' in Vercel.");
}

export const supabase = createClient(
  supabaseUrl || 'https://qtqoaglwqsuyqzwglpok.supabase.co', 
  supabaseAnonKey || 'placeholder'
);
