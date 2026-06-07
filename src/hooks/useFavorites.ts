import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('honeybee_favorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage', error);
    }
    setIsLoaded(true);
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const isFavorite = prev.includes(id);
      const updated = isFavorite ? prev.filter((fid) => fid !== id) : [...prev, id];
      try {
        localStorage.setItem('honeybee_favorites', JSON.stringify(updated));
      } catch (error) {
        console.error('Error saving favorites to localStorage', error);
      }
      return updated;
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return { favorites, toggleFavorite, isFavorite, isLoaded };
}
