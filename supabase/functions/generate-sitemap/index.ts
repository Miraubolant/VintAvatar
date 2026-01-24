import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SITE_URL = 'https://vintdress.com'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Client Supabase avec service role (bypass RLS)
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Recuperer uniquement les photos publiques (is_public = true)
    const { data: photos, error } = await supabase
      .from('usage_tracking')
      .select('id, created_at, metadata')
      .eq('is_public', true)
      .eq('generation_type', 'avatar')
      .order('created_at', { ascending: false })
      .limit(1000)

    if (error) {
      console.error('Database error:', error)
      throw error
    }

    // Generer le XML du sitemap
    const urls = (photos || [])
      .filter(photo => photo.metadata?.generated_image_url)
      .map(photo => {
        // Recuperer le slug ou en generer un a partir de l'ID
        const slug = photo.metadata?.slug || generateSlugFromId(photo.id, photo.metadata?.vinted_listing?.title)
        const title = photo.metadata?.vinted_listing?.title || 'Photo Vinted avec mannequin IA'
        const imageUrl = photo.metadata?.generated_image_url
        const lastmod = photo.created_at.split('T')[0]
        const clothingType = photo.metadata?.generation_config?.clothingType || 'vetement'

        return `
  <url>
    <loc>${SITE_URL}/photos/${encodeURIComponent(slug)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:title>${escapeXml(title)}</image:title>
      <image:caption>${escapeXml(`Photo ${clothingType} Vinted avec mannequin IA - VintDress`)}</image:caption>
    </image:image>
  </url>`
      })
      .join('')

    // Ajouter la page galerie principale
    const today = new Date().toISOString().split('T')[0]
    const galerieUrl = `
  <url>
    <loc>${SITE_URL}/galerie</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${galerieUrl}
${urls}
</urlset>`

    return new Response(sitemap, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache 1 heure
      },
    })

  } catch (error) {
    console.error('Sitemap generation error:', error)
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/galerie</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`,
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/xml; charset=utf-8',
        },
        status: 200, // Retourner 200 meme en cas d'erreur pour eviter les erreurs de sitemap
      }
    )
  }
})

// Generer un slug a partir de l'ID et du titre
function generateSlugFromId(id: string, title?: string): string {
  const idSuffix = id.replace(/-/g, '').slice(-5)

  if (title) {
    const slugBase = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
      .replace(/[^a-z0-9\s-]/g, '') // Garder uniquement lettres, chiffres, espaces, tirets
      .trim()
      .replace(/\s+/g, '-') // Remplacer espaces par tirets
      .replace(/-+/g, '-') // Supprimer tirets multiples
      .slice(0, 50) // Limiter la longueur

    return `${slugBase}-${idSuffix}`
  }

  return `photo-vinted-${idSuffix}`
}

// Echapper les caracteres speciaux XML
function escapeXml(text: string): string {
  if (!text) return ''
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
