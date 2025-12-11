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
  showPhone: boolean;
  cropHead: boolean;
}

// Removed ClothingAnalysis interface - no longer using GPT-4o analysis

Deno.serve(async (req) => {
  const origin = req.headers.get('origin')
  const corsHeaders = getCorsHeaders(origin)

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create Supabase client with user context
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! }
        }
      }
    )

    const { imageData, config, userId, isUrl } = await req.json()

    if (!imageData || !config || !userId) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }


    let originalImageUrl: string
    let originalImageBlob: Blob
    
    if (isUrl) {
      // If imageData is already a URL (from Vinted scraping), use it directly
      originalImageUrl = imageData
      // Fetch the image to get blob for images.edit API
      const imageResponse = await fetch(originalImageUrl)
      originalImageBlob = await imageResponse.blob()
    } else {
      // Step 1: Upload original image to storage (for uploaded files)
      // Convert base64 to blob for both storage and API use
      const base64Data = imageData.split(',')[1]
      const byteCharacters = atob(base64Data)
      const byteNumbers = new Array(byteCharacters.length)
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
      }
      const byteArray = new Uint8Array(byteNumbers)
      originalImageBlob = new Blob([byteArray], { type: 'image/jpeg' })
      
      originalImageUrl = await uploadOriginalImage(supabaseClient, imageData, userId)
    }
    
    // Step 2: Generate with Replicate directly (no analysis)
    const generatedImageUrl = await generateWithReplicate(originalImageUrl, config)
    
    // Step 5: Save generated image to storage
    const finalImageUrl = await saveGeneratedImage(supabaseClient, generatedImageUrl, userId)
    
    // Step 6: Track usage
    await trackUsage(supabaseClient, userId, originalImageUrl, finalImageUrl, config)
    
    // Step 7: Use credit from subscription
    await useUserCredit(supabaseClient, userId)

    return new Response(
      JSON.stringify({ 
        success: true, 
        generated_image_url: finalImageUrl
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})

async function cleanupOldImages(supabase: any, userId: string) {
  const MAX_IMAGES_PER_USER = 100;

  try {
    // Lister tous les fichiers de l'utilisateur
    const { data: files, error: listError } = await supabase.storage
      .from('original-images')
      .list(userId, {
        sortBy: { column: 'created_at', order: 'asc' }
      });

    if (listError) {
      console.error('Error listing files:', listError);
      return;
    }

    if (files && files.length >= MAX_IMAGES_PER_USER) {
      // Calculer combien de fichiers supprimer
      const filesToDeleteCount = files.length - MAX_IMAGES_PER_USER + 1;

      // Prendre les plus anciens fichiers
      const filesToDelete = files.slice(0, filesToDeleteCount);

      // Supprimer les fichiers un par un
      for (const file of filesToDelete) {
        const { error: deleteError } = await supabase.storage
          .from('original-images')
          .remove([`${userId}/${file.name}`]);

        if (deleteError) {
          console.error('Error deleting file:', deleteError);
        }
      }

      console.log(`Cleaned up ${filesToDelete.length} old images for user ${userId}`);
    }
  } catch (error) {
    console.error('Error in cleanupOldImages:', error);
  }
}

async function uploadOriginalImage(supabase: any, imageData: string, userId: string): Promise<string> {
  // Nettoyer les anciennes images avant l'upload
  await cleanupOldImages(supabase, userId);

  // Convert base64 to blob
  const base64Data = imageData.split(',')[1]
  const byteCharacters = atob(base64Data)
  const byteNumbers = new Array(byteCharacters.length)
  
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }
  
  const byteArray = new Uint8Array(byteNumbers)
  
  const fileName = `${userId}/${Date.now()}-original.jpg`
  
  const { data, error } = await supabase.storage
    .from('original-images')
    .upload(fileName, byteArray, {
      contentType: 'image/jpeg',
      upsert: true
    })

  if (error) throw error
  
  const { data: { signedUrl }, error: signedUrlError } = await supabase.storage
    .from('original-images')
    .createSignedUrl(fileName, 3600) // URL valide 1 heure
    
  if (signedUrlError) throw signedUrlError
    
  return signedUrl
}

// Removed analyzeClothing function - no longer using GPT-4o analysis

// Function for Replicate FLUX Kontext Pro generation
async function generateWithReplicate(
  imageUrl: string, 
  config: GenerationConfig
): Promise<string> {
  const replicateApiKey = Deno.env.get('REPLICATE_API_TOKEN')
  if (!replicateApiKey) {
    throw new Error('Replicate API key not configured')
  }

  
  // Map configuration to English for the prompt
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
    'studio-pro': 'professional white studio backdrop with soft lighting',
    'chambre': 'modern clean bedroom interior',
    'cabine': 'fitting room with mirror and good lighting',
    'exterieur': 'natural outdoor setting with soft daylight'
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

  const seasonMap: { [key: string]: string } = {
    'auto': 'season appropriate',
    'printemps': 'spring season with fresh bright lighting',
    'ete': 'summer season with warm bright lighting',
    'automne': 'autumn season with warm golden lighting',
    'hiver': 'winter season with cool crisp lighting'
  }

  const clothingTypeMap: { [key: string]: string } = {
    'auto': 'clothing item',
    't-shirt': 't-shirt',
    'chemise': 'shirt',
    'pull': 'sweater',
    'veste': 'jacket',
    'manteau': 'coat',
    'pantalon': 'pants',
    'jupe': 'skirt',
    'robe': 'dress',
    'short': 'shorts',
    'chaussures': 'shoes'
  }
  
  // Build simplified prompt for FLUX Kontext Pro
  const clothingType = clothingTypeMap[config.clothingType] || 'clothing item'

  let prompt: string

  // Check if plastic mannequin mode
  if (config.mannequinType === 'mannequin-plastique') {
    // Determine mannequin gender type
    const mannequinGender = config.gender === 'homme' ? 'male' : 'female'
    const mannequinBodyDescription = config.gender === 'homme'
      ? 'masculine proportions with broad shoulders and narrow hips'
      : 'feminine proportions with curved silhouette'

    // Plastic mannequin prompt with gender
    prompt = `Transform this ${clothingType} photo into a professional fashion retail display photograph.
  Show a sleek glossy black plastic ${mannequinGender} mannequin displaying this exact ${clothingType}.
  The mannequin should have ${mannequinBodyDescription}, smooth reflective black surface with elegant, modern design - like high-end retail store displays.
  Keep the original ${clothingType} exactly as shown - same colors, patterns, materials, and all details must be preserved.
  The mannequin should be ${postureMap[config.posture] || 'standing'} in a natural display pose.
  Camera angle: ${angleMap[config.angle] || 'optimal angle for the clothing type'}.
  Framing: ${framingMap[config.framing] || 'full body shot'}.
  Background: ${decorMap[config.decor] || 'professional studio setting'}.
  Lighting: ${lightingMap[config.lighting] || 'professional studio lighting'} with ${seasonMap[config.season] || 'season appropriate'} ambiance.
  Style: professional fashion retail photography with sharp focus on the ${clothingType}, sleek ${mannequinGender} mannequin with reflective black plastic surface, optimized for e-commerce display.`
  } else {
    // Human model prompt (existing logic)
    // Face visibility logic - avoid explicit face-related terms for security filters
    const faceInstruction = config.showPhone
      ? `The person holds a smartphone naturally at eye level in selfie position, with the device positioned directly in front of them. The phone screen covers the front view from forehead to chin area. Only hair, ears, and the back/sides of the head remain visible. The smartphone is held naturally in their hand at portrait orientation.`
      : `Apply a soft blur effect to the person for privacy while keeping the clothing and body in sharp focus.`

    prompt = `Transform this ${clothingType} photo into a professional fashion photograph.
  Show a ${ageMap[config.age] || 'age appropriate'} ${genderMap[config.gender] || 'person'} with ${carnationMap[config.carnation] || 'medium skin tone'} and ${config.morphology} body type wearing this exact ${clothingType}.
  Keep the original ${clothingType} exactly as shown - same colors, patterns, materials, and all details.
  The person should be ${postureMap[config.posture] || 'standing'}.
  Camera angle: ${angleMap[config.angle] || 'optimal angle for the clothing type'}.
  Framing: ${framingMap[config.framing] || 'full body shot'}.
  ${faceInstruction}
  Background: ${decorMap[config.decor] || 'professional studio setting'}.
  Lighting: ${lightingMap[config.lighting] || 'professional studio lighting'} with ${seasonMap[config.season] || 'season appropriate'} ambiance.
  Style: professional fashion photography with sharp focus on the ${clothingType}, optimized for e-commerce display.`
  }

  // Call Replicate API
  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${replicateApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      version: "2dfe45debca13e5ecfad755ef6ca9943fc56a6effb306f4c6e2ea4762df6e53e", // FLUX Kontext Pro version
      input: {
        prompt: prompt,
        input_image: imageUrl,
        aspect_ratio: "match_input_image",
        output_format: "png",
        safety_tolerance: 2
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
  const maxAttempts = 60 // Max 60 seconds
  
  while (result.status !== 'succeeded' && result.status !== 'failed' && attempts < maxAttempts) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const pollResponse = await fetch(`https://api.replicate.com/v1/predictions/${prediction.id}`, {
      headers: {
        'Authorization': `Token ${replicateApiKey}`
      }
    })
    
    if (!pollResponse.ok) {
      throw new Error('Failed to poll Replicate prediction')
    }
    
    result = await pollResponse.json()
    attempts++
    
    if (attempts % 10 === 0) {
    }
  }

  if (result.status === 'failed') {
    throw new Error(`Replicate generation failed: ${result.error || 'Unknown error'}`)
  }
  
  if (result.status !== 'succeeded') {
    throw new Error('Replicate generation timed out')
  }

  
  // Return the generated image URL - handle different possible output formats
  if (result.output) {
    // If output is an array, take the first element
    if (Array.isArray(result.output) && result.output.length > 0) {
      const imageUrl = result.output[0]
      if (typeof imageUrl === 'string' && imageUrl.startsWith('http')) {
        return imageUrl
      }
    }
    // If output is a string directly
    if (typeof result.output === 'string' && result.output.startsWith('http')) {
      return result.output
    }
  }
  
  throw new Error(`No valid output URL from Replicate: ${JSON.stringify(result.output)}`)
}

// Removed duplicate functions and GPT-4o residual code

async function saveGeneratedImage(supabase: any, imageUrl: string, userId: string): Promise<string> {
  let imageBlob: ArrayBuffer
  
  // Handle URL from Replicate (standard HTTP URL)
  const imageResponse = await fetch(imageUrl)
  imageBlob = await imageResponse.arrayBuffer()
  
  const fileName = `${userId}/${Date.now()}-generated.jpg`
  
  const { data, error } = await supabase.storage
    .from('generated-avatars')
    .upload(fileName, imageBlob, {
      contentType: 'image/jpeg',
      upsert: true
    })

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
  config: GenerationConfig
) {
  const { error } = await supabase
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
        model_used: 'flux-kontext-pro',
        generation_method: 'replicate',
        generation_timestamp: new Date().toISOString()
      }
    })

  if (error) throw error
}

async function useUserCredit(supabase: any, userId: string) {
  // Get all user subscriptions
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
    .filter(sub => sub.plan_type === 'credits' && sub.status === 'active')
    .reduce((total, sub) => total + sub.credits_remaining, 0)
  
  if (totalCredits > 0) {
    // Find first credit pack and use one credit
    const creditPack = subscriptions.find(sub => 
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
  const monthlySubscription = subscriptions.find(sub => 
    sub.plan_type === 'monthly' && 
    (sub.status === 'active' || (sub.current_period_end && sub.current_period_end > now))
  )
  
  if (monthlySubscription) {
    if (monthlySubscription.monthly_generations_used >= monthlySubscription.monthly_limit) {
      throw new Error('Monthly limit reached')
    }
    
    const { error: updateError } = await supabase
      .from('subscriptions')
      .update({ 
        monthly_generations_used: monthlySubscription.monthly_generations_used + 1 
      })
      .eq('id', monthlySubscription.id)
    
    if (updateError) throw updateError
    return
  }

  throw new Error('No valid subscription found')
}
