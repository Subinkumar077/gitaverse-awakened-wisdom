
import React from 'react';
import { getDailyShlokas } from '@/data/shlokas';
import ShlokaCard from './ShlokaCard';

const DailyShloka: React.FC = () => {
  const dailyShloka = getDailyShlokas()[0];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-spiritual mb-3">
          Today's Shloka
        </h2>
        <p className="text-gray-600 font-inter max-w-2xl mx-auto">
          A daily dose of timeless wisdom to inspire and guide your journey
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-blue-200/30 rounded-3xl blur-xl"></div>
          <div className="relative">
            <ShlokaCard shloka={dailyShloka} className="animate-float" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyShloka;
