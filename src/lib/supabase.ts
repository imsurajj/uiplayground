import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@supabase/supabase-js'

// Add fallback values or throw meaningful errors
const getSupabaseCredentials = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    throw new Error('Missing Supabase environment variables')
  }

  return { url, key }
}

const { url: supabaseUrl, key: supabaseKey } = getSupabaseCredentials()

// Client-side Supabase client
export const supabase = createClientComponentClient({
  supabaseUrl,
  supabaseKey,
})

// Server-side Supabase client (for API routes)
export const supabaseServer = createClient(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)
