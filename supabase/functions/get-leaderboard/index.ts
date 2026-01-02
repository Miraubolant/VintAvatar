import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL') || 'https://iroihdwursjjkadtbyye.supabase.co'
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Secure CORS configuration - restrict to allowed origins only
const allowedOrigins = [
  'https://vintdress.com',
  'https://www.vintdress.com',
  'http://localhost:5173',
  'http://127.0.0.1:5173'
]

const getCorsHeaders = (origin: string | null) => {
  const isAllowed = origin && allowedOrigins.some(allowed => origin === allowed)
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowedOrigins[0],
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
    'Cache-Control': 'public, max-age=300', // 5 minutes cache
  }
}

// Month names in different languages
const monthNames: Record<string, string[]> = {
  fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  it: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
}

serve(async (req) => {
  const origin = req.headers.get('origin')
  const corsHeaders = getCorsHeaders(origin)

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get language from query params (default: fr)
    const url = new URL(req.url)
    const lang = url.searchParams.get('lang') || 'fr'
    const validLang = ['fr', 'en', 'es', 'it'].includes(lang) ? lang : 'fr'

    // Get current month's leaderboard
    // Query: Get top 5 referrers of the current month with completed affiliations
    const { data: leaderboard, error } = await supabase
      .rpc('get_monthly_leaderboard', { limit_count: 5 })

    if (error) {
      // If RPC doesn't exist, try direct query
      const { data: directData, error: directError } = await supabase
        .from('affiliations')
        .select(`
          referrer_id,
          profiles!affiliations_referrer_id_fkey(first_name, last_name)
        `)
        .eq('status', 'completed')
        .gte('completed_at', new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString())
        .lt('completed_at', new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).toISOString())

      if (directError) {
        throw directError
      }

      // Aggregate results manually
      const aggregated: Record<string, { first_name: string; last_name: string; count: number }> = {}

      for (const row of directData || []) {
        const referrerId = row.referrer_id
        const profile = row.profiles as any

        if (!aggregated[referrerId]) {
          aggregated[referrerId] = {
            first_name: profile?.first_name || 'Anonyme',
            last_name: profile?.last_name || '',
            count: 0
          }
        }
        aggregated[referrerId].count++
      }

      // Sort and take top 5
      const sorted = Object.values(aggregated)
        .sort((a, b) => b.count - a.count)
        .slice(0, 5)
        .map(item => ({
          name: `${item.first_name} ${item.last_name ? item.last_name.charAt(0) + '.' : ''}`.trim(),
          count: item.count
        }))

      const now = new Date()
      const monthName = monthNames[validLang][now.getMonth()]
      const year = now.getFullYear()

      return new Response(
        JSON.stringify({
          leaderboard: sorted,
          month: `${monthName} ${year}`,
          updatedAt: now.toISOString()
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Format the response from RPC
    const formatted = (leaderboard || []).map((item: any) => ({
      name: `${item.first_name || 'Anonyme'} ${item.last_initial ? item.last_initial + '.' : ''}`.trim(),
      count: parseInt(item.referral_count, 10)
    }))

    const now = new Date()
    const monthName = monthNames[validLang][now.getMonth()]
    const year = now.getFullYear()

    return new Response(
      JSON.stringify({
        leaderboard: formatted,
        month: `${monthName} ${year}`,
        updatedAt: now.toISOString()
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    console.error('Error fetching leaderboard:', error)
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        leaderboard: [],
        month: '',
        updatedAt: new Date().toISOString()
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
