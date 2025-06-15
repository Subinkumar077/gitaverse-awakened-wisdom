
import React, { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookmarkButtonProps {
  shlokaId: string;
  className?: string;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ shlokaId, className = '' }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('gitaverse-bookmarks') || '[]');
    setIsBookmarked(bookmarks.includes(shlokaId));
  }, [shlokaId]);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('gitaverse-bookmarks') || '[]');
    
    if (isBookmarked) {
      const newBookmarks = bookmarks.filter((id: string) => id !== shlokaId);
      localStorage.setItem('gitaverse-bookmarks', JSON.stringify(newBookmarks));
      setIsBookmarked(false);
    } else {
      const newBookmarks = [...bookmarks, shlokaId];
      localStorage.setItem('gitaverse-bookmarks', JSON.stringify(newBookmarks));
      setIsBookmarked(true);
    }
  };

  return (
    <Button
      onClick={toggleBookmark}
      variant="outline"
      size="sm"
      className={`ripple transition-all duration-300 ${
        isBookmarked 
          ? 'bg-gradient-to-r from-purple-100 to-blue-100 border-purple-200 text-purple-800' 
          : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 text-gray-600 hover:from-purple-50 hover:to-blue-50'
      } ${className}`}
    >
      <div className="flex items-center gap-2">
        {isBookmarked ? (
          <BookmarkCheck className="h-4 w-4" />
        ) : (
          <Bookmark className="h-4 w-4" />
        )}
        <span className="text-xs font-medium">
          {isBookmarked ? 'Saved' : 'Save'}
        </span>
      </div>
    </Button>
  );
};

export default BookmarkButton;
