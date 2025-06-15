
import React from 'react';
import { Book, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Chapter } from '@/data/chapters';

interface ChapterSummaryProps {
  chapter: Chapter;
  onContinue: () => void;
  onBack: () => void;
}

const ChapterSummary: React.FC<ChapterSummaryProps> = ({ 
  chapter, 
  onContinue, 
  onBack 
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-card rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Book className="h-8 w-8 text-spiritual" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-spiritual font-crimson">
              Chapter {chapter.id} Complete!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {chapter.title}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Chapter Summary
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {chapter.summary}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Key Teachings
          </h2>
          <div className="space-y-3">
            {chapter.keyTeachings.map((teaching, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300">{teaching}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Button
            onClick={onBack}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Chapter
          </Button>

          <Button
            onClick={onContinue}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
          >
            Take Quiz
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChapterSummary;
