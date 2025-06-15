
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Book, Search, Bookmark, Settings } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/learn', label: 'Learn Gita', icon: Book },
    { path: '/search', label: 'Search', icon: Search },
    { path: '/favorites', label: 'Favorites', icon: Bookmark },
    { path: '/about', label: 'About', icon: Settings },
  ];

  return (
    <nav className="glass-card rounded-2xl p-4 mb-6 sticky top-4 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 text-sm font-medium ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 dark:from-orange-900/30 dark:to-yellow-900/30 dark:text-orange-200'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            );
          })}
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-xl font-bold text-spiritual font-crimson">
            GitaVerse
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
