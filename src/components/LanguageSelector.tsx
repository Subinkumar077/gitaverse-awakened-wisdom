
import React from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type SupportedLanguage = 'english' | 'hindi' | 'hinglish';

interface LanguageSelectorProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (language: SupportedLanguage) => void;
  className?: string;
}

const languageNames: Record<SupportedLanguage, string> = {
  english: 'English',
  hindi: 'हिन्दी',
  hinglish: 'Hinglish'
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  currentLanguage, 
  onLanguageChange, 
  className = '' 
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className={`ripple bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 border-blue-200 text-blue-800 ${className}`}
        >
          <Languages className="h-4 w-4 mr-2" />
          <span className="text-xs font-medium">{languageNames[currentLanguage]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="glass-card border-white/30 z-50">
        {Object.entries(languageNames).map(([key, name]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => onLanguageChange(key as SupportedLanguage)}
            className={`cursor-pointer transition-colors ${
              currentLanguage === key 
                ? 'bg-blue-100 text-blue-800' 
                : 'hover:bg-blue-50'
            }`}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
