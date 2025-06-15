
import React from 'react';
import { Book, Settings } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-spiritual mb-3 font-crimson">
          About GitaVerse
        </h1>
        <p className="text-gray-600 dark:text-gray-300 font-inter max-w-2xl mx-auto">
          The Calm Gita Learning Companion
        </p>
      </div>

      <div className="glass-card rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Book className="h-8 w-8 text-spiritual" />
          <h2 className="text-2xl font-bold text-spiritual font-crimson">Our Mission</h2>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          GitaVerse is designed to make the timeless wisdom of the Bhagavad Gita accessible to modern learners. 
          We combine authentic Sanskrit verses with AI-powered explanations, beautiful design, and interactive 
          features to create a peaceful learning experience.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-spiritual mb-3">🕉️ Authentic Teachings</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Original Sanskrit shlokas with accurate transliterations and translations in multiple languages.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-spiritual mb-3">🤖 AI-Powered Insights</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Modern explanations and real-life applications powered by advanced AI technology.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-spiritual mb-3">📱 Progressive Learning</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Sequential chapter-by-chapter learning with progress tracking and quizzes.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-spiritual mb-3">🎵 Audio Pronunciation</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Listen to proper Sanskrit pronunciation for authentic learning experience.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Settings className="h-8 w-8 text-spiritual" />
          <h2 className="text-2xl font-bold text-spiritual font-crimson">Features</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-spiritual rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">Complete Bhagavad Gita</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">All 18 chapters with sequential learning flow</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-spiritual rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">Multi-language Support</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">English, Hindi, and Hinglish translations</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-spiritual rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">Progress Tracking</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Auto-save your reading progress and bookmarks</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-spiritual rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">Chapter Summaries & Quizzes</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Reinforce learning with summaries and self-assessment</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-spiritual rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">Dark Mode</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Peaceful reading experience in any lighting condition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
