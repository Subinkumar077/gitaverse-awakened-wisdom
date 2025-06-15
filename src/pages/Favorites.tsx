
import React, { useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';
import ShlokaCard from '@/components/ShlokaCard';
import { popularShlokas, Shloka } from '@/data/shlokas';

const Favorites: React.FC = () => {
  const [bookmarkedShlokas, setBookmarkedShlokas] = useState<Shloka[]>([]);

  useEffect(() => {
    loadBookmarkedShlokas();
  }, []);

  const loadBookmarkedShlokas = () => {
    const bookmarkIds = JSON.parse(localStorage.getItem('gitaverse-bookmarks') || '[]');
    const bookmarked = popularShlokas.filter(shloka => bookmarkIds.includes(shloka.id));
    setBookmarkedShlokas(bookmarked);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-spiritual mb-3 font-crimson">
          Your Favorite Shlokas
        </h1>
        <p className="text-gray-600 dark:text-gray-300 font-inter max-w-2xl mx-auto">
          Revisit the verses that inspire and guide you
        </p>
      </div>

      {bookmarkedShlokas.length === 0 ? (
        <div className="text-center py-12">
          <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
            <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No Favorites Yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Start bookmarking your favorite shlokas to see them here!
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {bookmarkedShlokas.length} Bookmarked Shlokas
            </h2>
          </div>

          <div className="grid gap-8">
            {bookmarkedShlokas.map((shloka, index) => (
              <div 
                key={shloka.id} 
                className="opacity-0 animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <ShlokaCard shloka={shloka} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;
