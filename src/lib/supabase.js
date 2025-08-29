import { createClient } from '@supabase/supabase-js'

// Get your Supabase credentials from environment variables
const supabaseUrl = "https://hswdiqfyduagwgunhazh.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhzd2RpcWZ5ZHVhZ3dndW5oYXpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyMjAxNzUsImV4cCI6MjA3MTc5NjE3NX0.u9X030NnT0dYWmrs6uq8UhEj4SMqVlQylTW9tlcnaJA"

// Initialize client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
