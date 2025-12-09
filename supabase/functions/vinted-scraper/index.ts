import "jsr:@supabase/functions-js/edge-runtime.d.ts"

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
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
  }
}

interface VintedScrapResult {
  success: boolean;
  images: string[];
  error?: string;
  article_info?: {
    title: string;
    price: string;
    brand: string;
    size: string;
  };
}

Deno.serve(async (req) => {
  const origin = req.headers.get('origin')
  const corsHeaders = getCorsHeaders(origin)

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { vintedUrl } = await req.json()

    if (!vintedUrl) {
      return new Response(
        JSON.stringify({ success: false, error: 'URL Vinted requise', images: [] }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }


    // Validate Vinted URL
    if (!isValidVintedUrl(vintedUrl)) {
      return new Response(
        JSON.stringify({ success: false, error: 'URL Vinted invalide', images: [] }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Extract article ID from URL
    const articleId = extractArticleId(vintedUrl)
    if (!articleId) {
      return new Response(
        JSON.stringify({ success: false, error: 'Impossible d\'extraire l\'ID de l\'article', images: [] }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Scrape the Vinted page
    const result = await scrapeVintedArticle(vintedUrl, articleId)

    return new Response(
      JSON.stringify(result),
      {
        status: result.success ? 200 : 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Erreur serveur lors du scraping', 
        images: [] 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})

function isValidVintedUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url)
    const isVintedDomain = parsedUrl.hostname.includes('vinted.')
    const hasValidPath = parsedUrl.pathname.includes('/articles/') || parsedUrl.pathname.includes('/items/')
    return isVintedDomain && hasValidPath
  } catch {
    return false
  }
}

function extractArticleId(url: string): string | null {
  try {
    // Support both /articles/ and /items/ formats
    const articleRegex = /\/articles\/(\d+)(?:-|$|\?)/
    const itemRegex = /\/items\/(\d+)(?:-|$|\?)/
    
    let match = url.match(articleRegex)
    if (!match) {
      match = url.match(itemRegex)
    }
    
    return match ? match[1] : null
  } catch {
    return null
  }
}

async function scrapeVintedArticle(url: string, articleId: string): Promise<VintedScrapResult> {
  try {
    // Headers to mimic a real browser
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
      'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Cache-Control': 'max-age=0'
    }

    const response = await fetch(url, { 
      headers,
      redirect: 'follow'
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const html = await response.text()

    // Extract images using multiple strategies
    const images = extractImagesFromHtml(html)
    
    if (images.length === 0) {
      return {
        success: false,
        error: 'Aucune image trouvée sur cette page Vinted',
        images: []
      }
    }

    // Extract article info
    const articleInfo = extractArticleInfo(html)

    // Return first 4 images maximum
    const limitedImages = images.slice(0, 4)
    

    return {
      success: true,
      images: limitedImages,
      article_info: articleInfo
    }

  } catch (error) {
    return {
      success: false,
      error: `Erreur lors du scraping: ${error.message}`,
      images: []
    }
  }
}

function extractImagesFromHtml(html: string): string[] {
  const images: string[] = []
  
  // Strategy 1: Look for JSON-LD structured data
  try {
    const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>(.*?)<\/script>/gs
    const jsonLdMatches = html.match(jsonLdRegex)
    
    if (jsonLdMatches) {
      for (const match of jsonLdMatches) {
        const jsonContent = match.replace(/<script[^>]*>/, '').replace(/<\/script>/, '')
        try {
          const data = JSON.parse(jsonContent)
          if (data.image && Array.isArray(data.image)) {
            images.push(...data.image)
          } else if (data.image && typeof data.image === 'string') {
            images.push(data.image)
          }
        } catch {}
      }
    }
  } catch {}

  // Strategy 2: Look for meta og:image tags
  try {
    const metaImageRegex = /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/g
    let match
    while ((match = metaImageRegex.exec(html)) !== null) {
      images.push(match[1])
    }
  } catch {}

  // Strategy 3: Look for data-testid image containers
  try {
    const imgRegex = /<img[^>]*src=["']([^"']*vinted[^"']*)["'][^>]*>/g
    let match
    while ((match = imgRegex.exec(html)) !== null) {
      if (match[1].includes('photos') || match[1].includes('image')) {
        images.push(match[1])
      }
    }
  } catch {}

  // Strategy 4: Look for high-res images in script tags
  try {
    const scriptImageRegex = /"(?:image|photo|picture)":["']([^"']*\.(?:jpg|jpeg|png|webp)[^"']*)["']/g
    let match
    while ((match = scriptImageRegex.exec(html)) !== null) {
      images.push(match[1])
    }
  } catch {}

  // Clean and deduplicate images
  const cleanImages = images
    .map(img => {
      // Handle relative URLs
      if (img.startsWith('//')) {
        return 'https:' + img
      } else if (img.startsWith('/')) {
        return 'https://www.vinted.fr' + img
      }
      return img
    })
    .filter(img => {
      // Filter valid image URLs
      return img.includes('vinted') && 
             (img.includes('.jpg') || img.includes('.jpeg') || img.includes('.png') || img.includes('.webp')) &&
             !img.includes('avatar') &&
             !img.includes('logo')
    })
    // Remove duplicates
    .filter((img, index, arr) => arr.indexOf(img) === index)

  return cleanImages
}

function extractArticleInfo(html: string): any {
  try {
    // Extract title
    let title = ''
    const titleMatch = html.match(/<title[^>]*>([^<]+)</i)
    if (titleMatch) {
      title = titleMatch[1].replace(' | Vinted', '').trim()
    }

    // Extract price
    let price = ''
    const priceMatch = html.match(/["']price["']:\s*["']([^"']+)["']/i) || 
                      html.match(/€\s*(\d+(?:,\d{2})?)/i)
    if (priceMatch) {
      price = priceMatch[1]
    }

    // Extract brand
    let brand = ''
    const brandMatch = html.match(/["']brand["']:\s*["']([^"']+)["']/i)
    if (brandMatch) {
      brand = brandMatch[1]
    }

    // Extract size
    let size = ''
    const sizeMatch = html.match(/["']size["']:\s*["']([^"']+)["']/i)
    if (sizeMatch) {
      size = sizeMatch[1]
    }

    return { title, price, brand, size }
  } catch {
    return { title: '', price: '', brand: '', size: '' }
  }
}