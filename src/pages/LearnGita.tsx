
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ShlokaCard from '@/components/ShlokaCard';
import ChapterSummary from '@/components/ChapterSummary';
import ChapterQuiz from '@/components/ChapterQuiz';
import { chapters, getShlokasByChapter } from '@/data/chapters';

const LearnGita: React.FC = () => {
  const [currentChapter, setCurrentChapter] = useState(1);
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [progress, setProgress] = useState<Record<number, number>>({});

  const currentChapterData = chapters.find(c => c.id === currentChapter);
  const currentShlokas = getShlokasByChapter(currentChapter);
  const currentShloka = currentShlokas[currentVerseIndex];

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('gitaverse-progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const saveProgress = (chapter: number, verse: number) => {
    const newProgress = { ...progress, [chapter]: verse };
    setProgress(newProgress);
    localStorage.setItem('gitaverse-progress', JSON.stringify(newProgress));
  };

  const handleNext = () => {
    if (currentVerseIndex < currentShlokas.length - 1) {
      const newIndex = currentVerseIndex + 1;
      setCurrentVerseIndex(newIndex);
      saveProgress(currentChapter, newIndex);
    } else {
      setShowSummary(true);
    }
  };

  const handlePrevious = () => {
    if (currentVerseIndex > 0) {
      setCurrentVerseIndex(currentVerseIndex - 1);
    }
  };

  const handleChapterComplete = () => {
    setShowSummary(false);
    setShowQuiz(true);
  };

  const handleQuizComplete = () => {
    setShowQuiz(false);
    if (currentChapter < 18) {
      setCurrentChapter(currentChapter + 1);
      setCurrentVerseIndex(0);
    }
  };

  const progressPercentage = currentChapterData 
    ? ((currentVerseIndex + 1) / currentChapterData.totalVerses) * 100 
    : 0;

  if (showQuiz) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <ChapterQuiz
          chapter={currentChapterData!}
          onComplete={handleQuizComplete}
          onBack={() => setShowQuiz(false)}
        />
      </div>
    );
  }

  if (showSummary) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <ChapterSummary
          chapter={currentChapterData!}
          onContinue={handleChapterComplete}
          onBack={() => setShowSummary(false)}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Chapter Header */}
      <div className="glass-card rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Book className="h-6 w-6 text-spiritual" />
            <h1 className="text-2xl md:text-3xl font-bold text-spiritual font-crimson">
              Chapter {currentChapter}
            </h1>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Verse {currentVerseIndex + 1} of {currentChapterData?.totalVerses}
          </div>
        </div>
        
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          {currentChapterData?.title}
        </h2>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
          <div 
            className="bg-gradient-to-r from-orange-400 to-yellow-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400">
          {Math.round(progressPercentage)}% complete
        </div>
      </div>

      {/* Current Shloka */}
      {currentShloka && (
        <div className="mb-8">
          <ShlokaCard shloka={currentShloka} />
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          onClick={handlePrevious}
          disabled={currentVerseIndex === 0}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="text-sm text-gray-600 dark:text-gray-300">
          {currentVerseIndex + 1} / {currentChapterData?.totalVerses}
        </div>

        <Button
          onClick={handleNext}
          className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
        >
          {currentVerseIndex < currentShlokas.length - 1 ? 'Next' : 'Chapter Summary'}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default LearnGita;
