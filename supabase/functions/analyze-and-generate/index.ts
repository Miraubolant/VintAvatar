import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

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

interface GenerationConfig {
  gender: string;
  mannequinType: string;
  carnation: string;
  morphology: string;
  age: string;
  posture: string;
  angle: string;
  framing: string;
  decor: string;
  lighting: string;
  season: string;
  clothingType: string;
  faceMode: 'visible' | 'blur' | 'phone';
  cropHead: boolean;
}

interface VintedListing {
  title: string;
  description: string;
}

// Generate Vinted listing with GPT-4o Vision
async function generateVintedListing(imageUrl: string, clothingType: string): Promise<VintedListing> {
  const openaiApiKey = Deno.env.get('OPENAI_API_KEY')
  if (!openaiApiKey) {
    throw new Error('OpenAI API key not configured')
  }

  const systemPrompt = `Tu es un vendeur expert Vinted France. Tu génères des annonces attractives et professionnelles en FRANÇAIS.

RÈGLES:
- TITRE: max 50 caractères, format "[Type] [Couleur] - [Détail accrocheur]"
- DESCRIPTION: 6-8 lignes avec matière, couleur, coupe, état, occasion
- Analyse l'image pour décrire précisément le vêtement
- Réponds UNIQUEMENT en JSON valide, sans markdown ni texte supplémentaire.`

  const userPrompt = `Génère une annonce Vinted optimisée pour ce ${clothingType}.

Réponds UNIQUEMENT avec le JSON:
{"title": "...", "description": "..."}`

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          {
            role: 'user',
            content: [
              { type: 'text', text: userPrompt },
              { type: 'image_url', image_url: { url: imageUrl, detail: 'low' } }
            ]
          }
        ],
        max_tokens: 500,
        temperature: 0.4
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('OpenAI API error:', error)
      throw new Error(`OpenAI API error: ${error.error?.message || 'Unknown error'}`)
    }

    const result = await response.json()
    const outputText = result.choices?.[0]?.message?.content || ''

    // Parse JSON response
    try {
      const cleanedOutput = outputText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
      const parsed = JSON.parse(cleanedOutput)
      return {
        title: parsed.title || `${clothingType} - Très bon état`,
        description: (parsed.description || '').replace(/\\n/g, '\n')
      }
    } catch (parseError) {
      // Regex fallback
      const titleMatch = outputText.match(/"title"\s*:\s*"([^"]+)"/)
      const descMatch = outputText.match(/"description"\s*:\s*"([\s\S]*?)"(?:\s*[,}])/)
      return {
        title: titleMatch ? titleMatch[1] : `${clothingType} - Très bon état`,
        description: descMatch ? descMatch[1].replace(/\\n/g, '\n') : `Superbe ${clothingType} en excellent état.`
      }
    }

  } catch (error) {
    console.error('Vinted listing error:', error)
    return {
      title: `${clothingType.charAt(0).toUpperCase() + clothingType.slice(1)} - Excellent état`,
      description: `Magnifique ${clothingType} en très bon état.\n\nEnvoi soigné et rapide !`
    }
  }
}

// Generate with Replicate FLUX Kontext Pro
async function generateWithReplicate(imageUrl: string, config: GenerationConfig): Promise<string> {
  const replicateApiKey = Deno.env.get('REPLICATE_API_TOKEN')
  if (!replicateApiKey) {
    throw new Error('Replicate API key not configured')
  }

  // Map configuration to English
  const genderMap: { [key: string]: string } = {
    'femme': 'woman',
    'homme': 'man',
    'auto': 'person'
  }

  const carnationMap: { [key: string]: string } = {
    'claire': 'light skin tone',
    'medium': 'medium skin tone',
    'mate': 'olive skin tone',
    'foncee': 'dark skin tone'
  }

  const decorMap: { [key: string]: string } = {
    'fond-blanc': 'clean pure white background, professional solid white backdrop',
    'fond-gris': 'clean light gray background, professional solid gray backdrop',
    'fond-beige': 'clean beige/cream background, warm neutral solid backdrop',
    'studio-pro': 'professional white studio backdrop with softbox lighting setup',
    'chambre-moderne': 'modern minimalist bedroom with clean white walls and simple decor',
    'chambre-cosy': 'cozy warm bedroom with wooden furniture and soft textiles',
    'mur-brique': 'industrial exposed brick wall background, urban loft style',
    'exterieur': 'natural outdoor setting with soft daylight, urban or park background'
  }

  const postureMap: { [key: string]: string } = {
    'debout': 'standing straight',
    'assis': 'sitting',
    'accroupi': 'crouching',
    'cambre': 'arched back pose'
  }

  const ageMap: { [key: string]: string } = {
    'auto': 'age appropriate',
    '18-25': 'young adult (18-25 years old)',
    '26-35': 'young professional (26-35 years old)',
    '36-50': 'mature adult (36-50 years old)'
  }

  const angleMap: { [key: string]: string } = {
    'face': 'front view facing camera',
    '3-4': 'three-quarter angle view',
    'profil': 'side profile view',
    'auto': 'optimal angle for the clothing type'
  }

  const framingMap: { [key: string]: string } = {
    'corps-entier': 'full body shot',
    'mi-corps': 'half body shot from waist up',
    'plan-rapproche': 'close-up focused on the clothing item'
  }

  const lightingMap: { [key: string]: string } = {
    'studio': 'professional studio lighting with softboxes',
    'naturel': 'natural daylight lighting',
    'dramatique': 'dramatic lighting with strong shadows',
    'doux': 'soft diffused lighting'
  }

  const clothingTypeMap: { [key: string]: string } = {
    'haut': 'top/shirt',
    'bas': 'pants/bottoms',
    'robe': 'dress',
    'veste': 'jacket/coat',
    'ensemble': 'outfit/set',
    'auto': 'clothing item'
  }

  const clothingType = clothingTypeMap[config.clothingType] || 'clothing item'

  let prompt: string

  // Check if plastic mannequin mode
  if (config.mannequinType === 'mannequin-plastique') {
    const mannequinGender = config.gender === 'homme' ? 'male' : 'female'
    const mannequinBodyDescription = config.gender === 'homme'
      ? 'masculine proportions with broad shoulders and narrow hips'
      : 'feminine proportions with curved silhouette'

    prompt = `Transform this ${clothingType} photo into a professional fashion retail display photograph.
Show a sleek glossy black plastic ${mannequinGender} mannequin displaying this exact ${clothingType}.
The mannequin should have ${mannequinBodyDescription}, smooth reflective black surface with elegant, modern design - like high-end retail store displays.
CRITICAL: Keep the original ${clothingType} EXACTLY as shown - preserve all colors, patterns, materials, and details perfectly.
The mannequin should be ${postureMap[config.posture] || 'standing'} in a natural display pose.
Camera angle: ${angleMap[config.angle] || 'optimal angle for the clothing type'}.
Framing: ${framingMap[config.framing] || 'full body shot'}.
Background: ${decorMap[config.decor] || 'professional studio setting'}.
Lighting: ${lightingMap[config.lighting] || 'professional studio lighting'}.
Style: professional fashion retail photography with sharp focus on the ${clothingType}, sleek ${mannequinGender} mannequin with reflective black plastic surface, optimized for e-commerce display.`
  } else {
    // Human model prompt - face mode handling
    let faceInstruction = ''
    if (config.faceMode === 'phone') {
      faceInstruction = `The person holds a smartphone naturally at eye level in selfie position, with the device positioned directly in front of them. The phone screen covers the front view from forehead to chin area. Only hair, ears, and the back/sides of the head remain visible. The smartphone is held naturally in their hand at portrait orientation.`
    } else if (config.faceMode === 'blur') {
      faceInstruction = `Apply a soft blur effect to the person's face for privacy while keeping the clothing and body in sharp focus.`
    }
    // faceMode === 'visible' means no special instruction (face is visible and sharp)

    prompt = `Transform this ${clothingType} photo into a professional fashion photograph.
Show a ${ageMap[config.age] || 'young adult'} ${genderMap[config.gender] || 'person'} with ${carnationMap[config.carnation] || 'medium skin tone'} and ${config.morphology} body type wearing this exact ${clothingType}.
CRITICAL: Keep the original ${clothingType} EXACTLY as shown - preserve all colors, patterns, materials, and ALL visible details perfectly.
The person should be ${postureMap[config.posture] || 'standing'} with a natural, confident pose.
Camera angle: ${angleMap[config.angle] || 'optimal angle for the clothing type'}.
Framing: ${framingMap[config.framing] || 'full body shot'}.
${faceInstruction}
Background: ${decorMap[config.decor] || 'professional studio setting'}.
Lighting: ${lightingMap[config.lighting] || 'professional studio lighting'}.
Style: professional fashion photography with sharp focus on the ${clothingType}, optimized for e-commerce and Vinted listings.`
  }

  // Call Replicate API - FLUX.2 Pro
  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${replicateApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      version: "285631b5656a1839331cd9af0d82da820e2075db12046d1d061c681b2f206bc6",
      input: {
        prompt: prompt,
        input_images: [imageUrl],
        aspect_ratio: "match_input_image",
        output_format: "png",
        output_quality: 90,
        safety_tolerance: 5
      }
    })
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(`Replicate API error: ${error.detail || 'Unknown error'}`)
  }

  const prediction = await response.json()

  // Poll for result
  let result = prediction
  let attempts = 0
  const maxAttempts = 120 // 2 minutes timeout for FLUX.2 Pro (slower but higher quality)

  while (result.status !== 'succeeded' && result.status !== 'failed' && attempts < maxAttempts) {
    await new Promise(resolve => setTimeout(resolve, 1000))

    const pollResponse = await fetch(`https://api.replicate.com/v1/predictions/${prediction.id}`, {
      headers: { 'Authorization': `Token ${replicateApiKey}` }
    })

    if (!pollResponse.ok) {
      throw new Error('Failed to poll Replicate prediction')
    }

    result = await pollResponse.json()
    attempts++
  }

  if (result.status === 'failed') {
    const errorMessage = result.error || 'Unknown error'
    // Detect sensitive content error (E005)
    if (errorMessage.includes('E005') || errorMessage.toLowerCase().includes('sensitive') || errorMessage.toLowerCase().includes('flagged')) {
      const sensitiveError = new Error('SENSITIVE_CONTENT')
      sensitiveError.name = 'SensitiveContentError'
      throw sensitiveError
    }
    throw new Error(`Replicate generation failed: ${errorMessage}`)
  }

  if (result.status !== 'succeeded') {
    throw new Error('Replicate generation timed out')
  }

  // Return the generated image URL
  if (result.output) {
    if (Array.isArray(result.output) && result.output.length > 0) {
      const outputUrl = result.output[0]
      if (typeof outputUrl === 'string' && outputUrl.startsWith('http')) {
        return outputUrl
      }
    }
    if (typeof result.output === 'string' && result.output.startsWith('http')) {
      return result.output
    }
  }

  throw new Error(`No valid output URL from Replicate: ${JSON.stringify(result.output)}`)
}

Deno.serve(async (req) => {
  const origin = req.headers.get('origin')
  const corsHeaders = getCorsHeaders(origin)

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! }
        }
      }
    )

    const body = await req.json()
    const { imageData, config, userId, isUrl } = body

    // Validation stricte des paramètres requis
    if (!imageData || typeof imageData !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Invalid or missing image data' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (!userId || typeof userId !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Invalid or missing user ID' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (!config || typeof config !== 'object') {
      return new Response(
        JSON.stringify({ error: 'Invalid or missing configuration' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Validation de la taille de l'image (max 10MB en base64)
    const maxImageSize = 10 * 1024 * 1024 // 10MB
    if (!isUrl && imageData.length > maxImageSize) {
      return new Response(
        JSON.stringify({ error: 'Image too large. Maximum size is 10MB.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Validation des valeurs de config
    const validGenders = ['femme', 'homme', 'auto']
    const validMannequinTypes = ['humain', 'mannequin-plastique']
    const validCarnations = ['claire', 'medium', 'mate', 'foncee']
    const validPostures = ['debout', 'assis', 'accroupi', 'cambre']
    const validDecors = ['fond-blanc', 'fond-gris', 'fond-beige', 'studio-pro', 'chambre-moderne', 'chambre-cosy', 'mur-brique', 'exterieur']
    const validClothingTypes = ['haut', 'bas', 'robe', 'veste', 'ensemble', 'auto']
    const validFaceModes = ['visible', 'blur', 'phone']

    if (config.gender && !validGenders.includes(config.gender)) {
      return new Response(
        JSON.stringify({ error: 'Invalid gender value' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (config.mannequinType && !validMannequinTypes.includes(config.mannequinType)) {
      return new Response(
        JSON.stringify({ error: 'Invalid mannequin type' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (config.carnation && !validCarnations.includes(config.carnation)) {
      return new Response(
        JSON.stringify({ error: 'Invalid carnation value' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (config.posture && !validPostures.includes(config.posture)) {
      return new Response(
        JSON.stringify({ error: 'Invalid posture value' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (config.decor && !validDecors.includes(config.decor)) {
      return new Response(
        JSON.stringify({ error: 'Invalid decor value' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (config.clothingType && !validClothingTypes.includes(config.clothingType)) {
      return new Response(
        JSON.stringify({ error: 'Invalid clothing type' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (config.faceMode && !validFaceModes.includes(config.faceMode)) {
      return new Response(
        JSON.stringify({ error: 'Invalid face mode' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    let originalImageUrl: string

    if (isUrl) {
      originalImageUrl = imageData
    } else {
      originalImageUrl = await uploadOriginalImage(supabaseClient, imageData, userId)
    }

    // Generate image AND Vinted listing in parallel
    const [generatedImageUrl, vintedListing] = await Promise.all([
      generateWithReplicate(originalImageUrl, config),
      generateVintedListing(originalImageUrl, config.clothingType)
    ])

    // Save generated image to storage
    const finalImageUrl = await saveGeneratedImage(supabaseClient, generatedImageUrl, userId)

    // Track usage
    const generationId = await trackUsage(supabaseClient, userId, originalImageUrl, finalImageUrl, config, vintedListing)

    // Use credit from subscription
    await useUserCredit(supabaseClient, userId)

    return new Response(
      JSON.stringify({
        success: true,
        generation_id: generationId,
        generated_image_url: finalImageUrl,
        vinted_listing: vintedListing
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error: unknown) {
    // Log detailed error server-side only
    console.error('Generation error:', error)

    const err = error as Error & { name?: string; message?: string }

    // Handle sensitive content error
    if (err.name === 'SensitiveContentError' || err.message === 'SENSITIVE_CONTENT') {
      return new Response(
        JSON.stringify({
          error: 'Votre photo a été refusée par notre système de sécurité. Cela peut arriver si la photo contient des éléments sensibles ou inappropriés, si le vêtement est trop transparent ou révélateur, ou s\'il y a des éléments visibles non conformes à nos conditions. Essayez avec une autre photo de votre vêtement.',
          errorCode: 'SENSITIVE_CONTENT'
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Handle known user-facing errors
    const userFacingErrors = [
      'No subscriptions found',
      'Monthly limit reached',
      'No valid subscription found'
    ]

    if (err.message && userFacingErrors.includes(err.message)) {
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Generic error for all other cases - don't expose internal details
    return new Response(
      JSON.stringify({ error: 'An error occurred during generation. Please try again.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

async function cleanupOldImages(supabase: any, userId: string) {
  const MAX_IMAGES_PER_USER = 100;
  try {
    const { data: files, error: listError } = await supabase.storage
      .from('original-images')
      .list(userId, { sortBy: { column: 'created_at', order: 'asc' } });

    if (listError) return;

    if (files && files.length >= MAX_IMAGES_PER_USER) {
      const filesToDeleteCount = files.length - MAX_IMAGES_PER_USER + 1;
      const filesToDelete = files.slice(0, filesToDeleteCount);
      for (const file of filesToDelete) {
        await supabase.storage.from('original-images').remove([`${userId}/${file.name}`]);
      }
    }
  } catch (error) {
    console.error('Error in cleanupOldImages:', error);
  }
}

async function uploadOriginalImage(supabase: any, imageData: string, userId: string): Promise<string> {
  await cleanupOldImages(supabase, userId);

  const base64Data = imageData.split(',')[1]
  const byteCharacters = atob(base64Data)
  const byteNumbers = new Array(byteCharacters.length)

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }

  const byteArray = new Uint8Array(byteNumbers)
  const fileName = `${userId}/${Date.now()}-original.jpg`

  const { error } = await supabase.storage
    .from('original-images')
    .upload(fileName, byteArray, { contentType: 'image/jpeg', upsert: true })

  if (error) throw error

  const { data: { signedUrl }, error: signedUrlError } = await supabase.storage
    .from('original-images')
    .createSignedUrl(fileName, 3600)

  if (signedUrlError) throw signedUrlError
  return signedUrl
}

async function saveGeneratedImage(supabase: any, imageUrl: string, userId: string): Promise<string> {
  const imageResponse = await fetch(imageUrl)
  const imageBlob = await imageResponse.arrayBuffer()

  const fileName = `${userId}/${Date.now()}-generated.jpg`

  const { error } = await supabase.storage
    .from('generated-avatars')
    .upload(fileName, imageBlob, { contentType: 'image/jpeg', upsert: true })

  if (error) throw error

  const { data: { publicUrl } } = supabase.storage
    .from('generated-avatars')
    .getPublicUrl(fileName)

  return publicUrl
}

async function trackUsage(
  supabase: any,
  userId: string,
  originalUrl: string,
  generatedUrl: string,
  config: GenerationConfig,
  vintedListing?: VintedListing
): Promise<string> {
  const { data, error } = await supabase
    .from('usage_tracking')
    .insert({
      user_id: userId,
      generation_type: 'avatar',
      credits_used: 1,
      metadata: {
        original_image_url: originalUrl,
        generated_image_url: generatedUrl,
        generation_config: config,
        clothing_type: config.clothingType,
        model_used: 'flux-2-pro',
        generation_method: 'replicate',
        generation_timestamp: new Date().toISOString(),
        vinted_listing: vintedListing || null
      }
    })
    .select('id')
    .single()

  if (error) throw error
  return data.id
}

async function useUserCredit(supabase: any, userId: string) {
  const { data: subscriptions, error: fetchError } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (fetchError || !subscriptions || subscriptions.length === 0) {
    throw new Error('No subscriptions found')
  }

  const now = new Date().toISOString()

  // Priority 1: Use credits first
  const totalCredits = subscriptions
    .filter((sub: any) => sub.plan_type === 'credits' && sub.status === 'active')
    .reduce((total: number, sub: any) => total + sub.credits_remaining, 0)

  if (totalCredits > 0) {
    const creditPack = subscriptions.find((sub: any) =>
      sub.plan_type === 'credits' &&
      sub.status === 'active' &&
      sub.credits_remaining > 0
    )

    if (creditPack) {
      const { error: updateError } = await supabase
        .from('subscriptions')
        .update({ credits_remaining: creditPack.credits_remaining - 1 })
        .eq('id', creditPack.id)

      if (updateError) throw updateError
      return
    }
  }

  // Priority 2: Use monthly subscription
  const monthlySubscription = subscriptions.find((sub: any) =>
    sub.plan_type === 'monthly' &&
    (sub.status === 'active' || (sub.current_period_end && sub.current_period_end > now))
  )

  if (monthlySubscription) {
    if (monthlySubscription.monthly_generations_used >= monthlySubscription.monthly_limit) {
      throw new Error('Monthly limit reached')
    }

    const { error: updateError } = await supabase
      .from('subscriptions')
      .update({ monthly_generations_used: monthlySubscription.monthly_generations_used + 1 })
      .eq('id', monthlySubscription.id)

    if (updateError) throw updateError
    return
  }

  throw new Error('No valid subscription found')
}
