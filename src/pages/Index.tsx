
import React, { useState, useEffect } from 'react';
import { Bookmark, Search } from 'lucide-react';
import Header from '@/components/Header';
import DailyShloka from '@/components/DailyShloka';
import ShlokaCard from '@/components/ShlokaCard';
import SearchBar from '@/components/SearchBar';
import { popularShlokas, searchShlokas, Shloka } from '@/data/shlokas';

const Index: React.FC = () => {
  const [shlokas, setShlokas] = useState<Shloka[]>(popularShlokas);
  const [bookmarkedShlokas, setBookmarkedShlokas] = useState<Shloka[]>([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadBookmarkedShlokas();
  }, []);

  const loadBookmarkedShlokas = () => {
    const bookmarkIds = JSON.parse(localStorage.getItem('gitaverse-bookmarks') || '[]');
    const bookmarked = popularShlokas.filter(shloka => bookmarkIds.includes(shloka.id));
    setBookmarkedShlokas(bookmarked);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchShlokas(query);
      setShlokas(results);
      setShowBookmarks(false);
    } else {
      setShlokas(popularShlokas);
      setShowBookmarks(false);
    }
  };

  const handleShowBookmarks = () => {
    loadBookmarkedShlokas();
    setShowBookmarks(!showBookmarks);
    setSearchQuery('');
  };

  const displayShlokas = showBookmarks ? bookmarkedShlokas : shlokas;

  return (
    <div className="min-h-screen spiritual-gradient">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header onShowBookmarks={handleShowBookmarks} />
        
        {!showBookmarks && !searchQuery && <DailyShloka />}
        
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-spiritual mb-4 font-crimson">
            {showBookmarks 
              ? `Your Bookmarked Shlokas (${bookmarkedShlokas.length})`
              : searchQuery 
              ? `Search Results (${displayShlokas.length})`
              : 'Popular Shlokas from Bhagavad Gita'
            }
          </h2>
          
          {showBookmarks && bookmarkedShlokas.length === 0 && (
            <div className="text-center py-12">
              <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
                <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No Bookmarks Yet</h3>
                <p className="text-gray-600">
                  Start bookmarking your favorite shlokas to see them here!
                </p>
              </div>
            </div>
          )}
          
          {searchQuery && displayShlokas.length === 0 && (
            <div className="text-center py-12">
              <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No Results Found</h3>
                <p className="text-gray-600">
                  Try searching with different keywords or chapter numbers.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-8">
          {displayShlokas.map((shloka, index) => (
            <div key={shloka.id} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
              <ShlokaCard shloka={shloka} />
            </div>
          ))}
        </div>

        {!showBookmarks && !searchQuery && (
          <div className="text-center mt-12 glass-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-spiritual mb-3">
              Journey Through the Gita
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Each shloka in the Bhagavad Gita contains profound wisdom that can transform lives. 
              Explore these timeless teachings, bookmark your favorites, and let ancient wisdom 
              guide your modern journey.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
