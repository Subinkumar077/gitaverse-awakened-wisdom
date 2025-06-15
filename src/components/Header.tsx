
import React from 'react';
import { Bookmark } from 'lucide-react';

interface HeaderProps {
  onShowBookmarks: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowBookmarks }) => {
  return (
    <header className="glass-card rounded-2xl p-6 mb-8 sticky top-4 z-40">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-spiritual font-crimson">
            GitaVerse
          </h1>
          <p className="text-gray-600 text-sm md:text-base font-inter">
            The Living Gita - Ancient Wisdom for Modern Life
          </p>
        </div>
        
        <button
          onClick={onShowBookmarks}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 text-purple-800 transition-all duration-300 transform hover:scale-105"
        >
          <Bookmark className="h-4 w-4" />
          <span className="font-medium text-sm">Bookmarks</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
