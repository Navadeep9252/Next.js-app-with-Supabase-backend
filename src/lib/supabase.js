import { createClient } from '@supabase/supabase-js'

// Get your Supabase credentials from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Initialize client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
