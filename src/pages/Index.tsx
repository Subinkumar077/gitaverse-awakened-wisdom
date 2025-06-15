
import React, { useState, useEffect } from 'react';
import { Bookmark, Search } from 'lucide-react';
import DailyShloka from '@/components/DailyShloka';
import ShlokaCard from '@/components/ShlokaCard';
import SearchBar from '@/components/SearchBar';
import { popularShlokas, searchShlokas, Shloka } from '@/data/shlokas';

const Index: React.FC = () => {
  const [shlokas, setShlokas] = useState<Shloka[]>(popularShlokas);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchShlokas(query);
      setShlokas(results);
    } else {
      setShlokas(popularShlokas);
    }
  };

  const displayShlokas = shlokas;

  return (
    <>
      {!searchQuery && <DailyShloka />}
      
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-spiritual mb-4 font-crimson">
          {searchQuery 
            ? `Search Results (${displayShlokas.length})`
            : 'Popular Shlokas from Bhagavad Gita'
          }
        </h2>
        
        {searchQuery && displayShlokas.length === 0 && (
          <div className="text-center py-12">
            <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">No Results Found</h3>
              <p className="text-gray-600 dark:text-gray-400">
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

      {!searchQuery && (
        <div className="text-center mt-12 glass-card rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-spiritual mb-3">
            Journey Through the Gita
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Each shloka in the Bhagavad Gita contains profound wisdom that can transform lives. 
            Explore these timeless teachings, bookmark your favorites, and let ancient wisdom 
            guide your modern journey.
          </p>
        </div>
      )}
    </>
  );
};

export default Index;
