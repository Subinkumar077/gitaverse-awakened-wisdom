
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import ShlokaCard from '@/components/ShlokaCard';
import { searchShlokas, Shloka } from '@/data/shlokas';

const SearchShlokas: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Shloka[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchShlokas(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-spiritual mb-3 font-crimson">
          Search Shlokas
        </h1>
        <p className="text-gray-600 dark:text-gray-300 font-inter max-w-2xl mx-auto">
          Find specific verses, teachings, or themes from the Bhagavad Gita
        </p>
      </div>

      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      {searchQuery && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {searchResults.length > 0 
              ? `Found ${searchResults.length} results for "${searchQuery}"`
              : `No results found for "${searchQuery}"`
            }
          </h2>
        </div>
      )}

      {searchResults.length === 0 && searchQuery && (
        <div className="text-center py-12">
          <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No Results Found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try searching with different keywords, chapter numbers, or themes.
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-8">
        {searchResults.map((shloka, index) => (
          <div 
            key={shloka.id} 
            className="opacity-0 animate-fade-in" 
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
          >
            <ShlokaCard shloka={shloka} />
          </div>
        ))}
      </div>

      {!searchQuery && (
        <div className="text-center mt-12 glass-card rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-spiritual mb-3">
            Explore the Wisdom
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Search through the verses of the Bhagavad Gita to find guidance for any situation in life.
            Use keywords like "dharma", "karma", "devotion", or search by chapter and verse numbers.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchShlokas;
