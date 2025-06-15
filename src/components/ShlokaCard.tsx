
import React, { useState } from 'react';
import { Shloka } from '@/data/shlokas';
import AudioPlayer from './AudioPlayer';
import BookmarkButton from './BookmarkButton';
import LanguageSelector, { SupportedLanguage } from './LanguageSelector';
import AIExplanation from './AIExplanation';

interface ShlokaCardProps {
  shloka: Shloka;
  className?: string;
}

const ShlokaCard: React.FC<ShlokaCardProps> = ({ shloka, className = '' }) => {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('english');

  return (
    <div className={`shloka-card ${className}`}>
      {/* Header with Chapter and Verse */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-spiritual bg-gradient-to-r from-orange-100 to-yellow-100 px-3 py-1 rounded-full">
            Chapter {shloka.chapter}, Verse {shloka.verse}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
          <BookmarkButton shlokaId={shloka.id} />
        </div>
      </div>

      {/* Sanskrit Text */}
      <div className="mb-6">
        <div className="text-center">
          <p className="font-devanagari text-2xl md:text-3xl leading-relaxed text-gray-800 mb-3">
            {shloka.sanskrit}
          </p>
          <p className="font-crimson text-sm md:text-base text-gray-600 italic leading-relaxed">
            {shloka.transliteration}
          </p>
        </div>
      </div>

      {/* Translation */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
          Translation ({currentLanguage})
        </h3>
        <p className={`text-gray-800 leading-relaxed ${
          currentLanguage === 'hindi' ? 'font-devanagari text-lg' : 'font-inter'
        }`}>
          {shloka.translations[currentLanguage]}
        </p>
      </div>

      {/* Word Meaning */}
      {shloka.wordMeaning && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
            Word by Word Meaning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {shloka.wordMeaning.map((word, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-white/50">
                <span className="font-devanagari text-orange-800 font-medium">
                  {word.sanskrit}
                </span>
                <span className="text-gray-600">→</span>
                <span className="text-gray-700 text-sm">
                  {word.meaning}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Explanation */}
      <AIExplanation shloka={shloka} />

      {/* Audio Controls */}
      <div className="flex justify-center pt-4 border-t border-white/30">
        <AudioPlayer text={shloka.sanskrit} />
      </div>
    </div>
  );
};

export default ShlokaCard;
