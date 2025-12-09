import { useState, useEffect } from 'react';

export interface BeforeAfterItem {
  id: number;
  category: string;
  description: string;
  improvement: string;
  tags: string[];
  before_image_url: string;
  after_image_url: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useBeforeAfter = () => {
  const [items, setItems] = useState<BeforeAfterItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadItems = () => {
    setLoading(true);
    setError(null);
    
    // Vos photos personnalisées
    const customData: BeforeAfterItem[] = [
      {
        id: 1,
        category: "Robe Noire Élégante",
        description: "Photo amateur → Avatar IA professionnel",
        improvement: "",
        tags: ["Mode", "Robe", "Élégant"],
        before_image_url: "https://iroihdwursjjkadtbyye.supabase.co/storage/v1/object/sign/original-images/before-after/1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NTMxMjU5Yi05M2ZlLTRkMzctYTI3Yy0yYTVlYzljN2RhN2UiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvcmlnaW5hbC1pbWFnZXMvYmVmb3JlLWFmdGVyLzEuanBnIiwiaWF0IjoxNzU3NjE3ODUxLCJleHAiOjE5MTUyOTc4NTF9.zCmWNnmrUNrtcE_B_xQkqYUk67Q8_7h-_Dc2QwYqSfk",
        after_image_url: "https://iroihdwursjjkadtbyye.supabase.co/storage/v1/render/image/public/generated-avatars/before-after/1.jpg?width=500&quality=75",
        display_order: 1,
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 2,
        category: "Veste Motif Chic",
        description: "Transformation élégante avec IA",
        improvement: "",
        tags: ["Mode", "Fleurs", "Veste"],
        before_image_url: "https://iroihdwursjjkadtbyye.supabase.co/storage/v1/object/sign/original-images/before-after/chemisier_fleur.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NTMxMjU5Yi05M2ZlLTRkMzctYTI3Yy0yYTVlYzljN2RhN2UiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvcmlnaW5hbC1pbWFnZXMvYmVmb3JlLWFmdGVyL2NoZW1pc2llcl9mbGV1ci5qcGciLCJpYXQiOjE3NTgwMTY4MjksImV4cCI6MTkxNTY5NjgyOX0.d9cguKBr-TdQnT26hZ6gOFBXYO7gDkfuO8K8RJDZGHw",
        after_image_url: "https://iroihdwursjjkadtbyye.supabase.co/storage/v1/render/image/public/generated-avatars/before-after/chemisier_ia.jpg?width=500&quality=75",
        display_order: 2,
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 3,
        category: "Pull Rayé Confort",
        description: "Mise en scène professionnelle",
        improvement: "",
        tags: ["Mode", "Casual", "Pull"],
        before_image_url: "https://iroihdwursjjkadtbyye.supabase.co/storage/v1/object/sign/original-images/before-after/pull_raye.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NTMxMjU5Yi05M2ZlLTRkMzctYTI3Yy0yYTVlYzljN2RhN2UiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvcmlnaW5hbC1pbWFnZXMvYmVmb3JlLWFmdGVyL3B1bGxfcmF5ZS5qcGVnIiwiaWF0IjoxNzU4MDE4ODcxLCJleHAiOjE5MTU2OTg4NzF9.p4N9hu6nX8i4mlV3aAtqRrO4-GEf3KdCe9qi9OkHkNA",
        after_image_url: "https://iroihdwursjjkadtbyye.supabase.co/storage/v1/render/image/public/generated-avatars/before-after/pull_raye_ia.jpg?width=500&quality=75",
        display_order: 3,
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 4,
        category: "T-Shirt Reebok Logo",
        description: "Avatar moderne et tendance",
        improvement: "",
        tags: ["Mode", "T-Shirt", "Logo"],
        before_image_url: "https://iroihdwursjjkadtbyye.supabase.co/storage/v1/object/sign/original-images/before-after/tee_shirt_reebook.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NTMxMjU5Yi05M2ZlLTRkMzctYTI3Yy0yYTVlYzljN2RhN2UiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvcmlnaW5hbC1pbWFnZXMvYmVmb3JlLWFmdGVyL3RlZV9zaGlydF9yZWVib29rLmpwZWciLCJpYXQiOjE3NTgwMTg0ODMsImV4cCI6MTkxNTY5ODQ4M30.6J8udkUQL9ZH1BdFVBxmfSloMJFI7G9RMw_y4jdwXS0",
        after_image_url: "https://iroihdwursjjkadtbyye.supabase.co/storage/v1/render/image/public/generated-avatars/before-after/tee_shirt_reebook_ia.jpg?width=500&quality=75",
        display_order: 4,
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    ];
    
    setItems(customData);
    setLoading(false);
  };

  useEffect(() => {
    loadItems();
  }, []);

  // Fonction pour rafraîchir les données (simple reload)
  const refetch = () => {
    loadItems();
  };

  return { 
    items, 
    loading, 
    error, 
    refetch 
  };
};