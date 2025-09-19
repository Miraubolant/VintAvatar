-- Create storage buckets for image generation
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types) VALUES 
  ('original-images', 'original-images', false, 10485760, ARRAY['image/jpeg', 'image/png', 'image/webp']),
  ('generated-avatars', 'generated-avatars', true, 10485760, ARRAY['image/jpeg', 'image/png', 'image/webp'])
ON CONFLICT (id) DO NOTHING;

-- Policies for original-images bucket (private)
CREATE POLICY "Users can upload their own original images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'original-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view their own original images" ON storage.objects
  FOR SELECT USING (bucket_id = 'original-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own original images" ON storage.objects
  FOR DELETE USING (bucket_id = 'original-images' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Policies for generated-avatars bucket (public)
CREATE POLICY "Users can upload their own generated avatars" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'generated-avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Anyone can view generated avatars" ON storage.objects
  FOR SELECT USING (bucket_id = 'generated-avatars');

CREATE POLICY "Users can delete their own generated avatars" ON storage.objects
  FOR DELETE USING (bucket_id = 'generated-avatars' AND auth.uid()::text = (storage.foldername(name))[1]);