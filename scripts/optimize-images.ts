#!/usr/bin/env tsx

/**
 * Script d'optimisation des images before-after
 *
 * Convertit les images JPG/JPEG en WebP avec plusieurs tailles:
 * - small: 400px (mobile)
 * - medium: 600px (tablet)
 * - large: 800px (desktop)
 * - original: taille originale compressée
 *
 * Usage: npx tsx scripts/optimize-images.ts
 */

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const INPUT_DIR = path.join(process.cwd(), 'public/images/before-after');
const OUTPUT_DIR = path.join(process.cwd(), 'public/images/before-after/optimized');

const SIZES = {
  small: 400,   // Mobile
  medium: 600,  // Tablet
  large: 800,   // Desktop
};

const WEBP_QUALITY = 85;
const JPEG_QUALITY = 90;

async function ensureDir(dir: string) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function getImageDimensions(filePath: string): Promise<{ width: number; height: number }> {
  const metadata = await sharp(filePath).metadata();
  return {
    width: metadata.width || 0,
    height: metadata.height || 0
  };
}

async function convertToWebP(
  inputPath: string,
  outputPath: string,
  width?: number
): Promise<void> {
  let pipeline = sharp(inputPath);

  if (width) {
    pipeline = pipeline.resize(width, undefined, {
      fit: 'inside',
      withoutEnlargement: true
    });
  }

  await pipeline
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath);
}

async function optimizeJpeg(
  inputPath: string,
  outputPath: string,
  width?: number
): Promise<void> {
  let pipeline = sharp(inputPath);

  if (width) {
    pipeline = pipeline.resize(width, undefined, {
      fit: 'inside',
      withoutEnlargement: true
    });
  }

  await pipeline
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(outputPath);
}

async function optimizeImage(filename: string): Promise<void> {
  const inputPath = path.join(INPUT_DIR, filename);
  const ext = path.extname(filename);
  const baseName = path.basename(filename, ext);

  console.log(`\n🖼️  Optimizing: ${filename}`);

  // Get original dimensions
  const { width: originalWidth, height: originalHeight } = await getImageDimensions(inputPath);
  console.log(`   Original: ${originalWidth}x${originalHeight}`);

  // Generate WebP versions at different sizes
  for (const [sizeName, width] of Object.entries(SIZES)) {
    const webpPath = path.join(OUTPUT_DIR, `${baseName}-${sizeName}.webp`);
    await convertToWebP(inputPath, webpPath, width);

    const { width: newWidth, height: newHeight } = await getImageDimensions(webpPath);
    const fileSize = (await fs.stat(webpPath)).size;
    console.log(`   ✓ ${sizeName}: ${newWidth}x${newHeight} (${(fileSize / 1024).toFixed(1)} KB) - WebP`);
  }

  // Generate optimized original size WebP
  const webpOriginalPath = path.join(OUTPUT_DIR, `${baseName}.webp`);
  await convertToWebP(inputPath, webpOriginalPath);
  const webpOriginalSize = (await fs.stat(webpOriginalPath)).size;
  console.log(`   ✓ original: ${originalWidth}x${originalHeight} (${(webpOriginalSize / 1024).toFixed(1)} KB) - WebP`);

  // Keep optimized JPEG as fallback
  const jpegFallbackPath = path.join(OUTPUT_DIR, `${baseName}${ext}`);
  await optimizeJpeg(inputPath, jpegFallbackPath);
  const jpegSize = (await fs.stat(jpegFallbackPath)).size;
  console.log(`   ✓ fallback: ${originalWidth}x${originalHeight} (${(jpegSize / 1024).toFixed(1)} KB) - JPEG`);

  // Calculate savings
  const originalSize = (await fs.stat(inputPath)).size;
  const savings = ((originalSize - webpOriginalSize) / originalSize * 100).toFixed(1);
  console.log(`   💾 Savings: ${savings}% (${((originalSize - webpOriginalSize) / 1024).toFixed(1)} KB)`);
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`Input: ${INPUT_DIR}`);
  console.log(`Output: ${OUTPUT_DIR}\n`);

  // Ensure output directory exists
  await ensureDir(OUTPUT_DIR);

  // Get all image files
  const files = await fs.readdir(INPUT_DIR);
  const imageFiles = files.filter(file =>
    /\.(jpg|jpeg|png)$/i.test(file) && !file.startsWith('.')
  );

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  // Process each image
  for (const file of imageFiles) {
    try {
      await optimizeImage(file);
    } catch (error) {
      console.error(`   ❌ Error optimizing ${file}:`, error);
    }
  }

  console.log('\n✅ Image optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Update BeforeAfterSection.tsx to use optimized images with <picture> tags');
  console.log('2. Update useBeforeAfter.ts to point to optimized images');
  console.log('3. Test responsive images on different screen sizes');
}

main().catch(console.error);
