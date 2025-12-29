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
        category: "Blouson Cuir Marron",
        description: "Photo amateur → Avatar IA professionnel",
        improvement: "",
        tags: ["Mode", "Blouson", "Cuir"],
        before_image_url: "/images/before-after/1.jpg",
        after_image_url: "https://iroihdwursjjkadtbyye.supabase.co/storage/v1/object/public/generated-avatars/before-after/1.jpg",
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
        before_image_url: "/images/before-after/chemisier_fleur.jpg",
        after_image_url: "https://iroihdwursjjkadtbyye.supabase.co/storage/v1/object/public/generated-avatars/before-after/chemisier_ia.jpg",
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
        before_image_url: "/images/before-after/pull_raye.jpeg",
        after_image_url: "https://iroihdwursjjkadtbyye.supabase.co/storage/v1/object/public/generated-avatars/before-after/pull_raye_ia.jpg",
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
        before_image_url: "/images/before-after/tee_shirt_reebook.jpeg",
        after_image_url: "https://iroihdwursjjkadtbyye.supabase.co/storage/v1/object/public/generated-avatars/before-after/tee_shirt_reebook_ia.jpg",
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