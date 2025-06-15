
import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AudioPlayerProps {
  text: string;
  className?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ text, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const playAudio = () => {
    if ('speechSynthesis' in window) {
      setIsLoading(true);
      
      // Cancel any ongoing speech
      speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.7;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      // Try to find a voice that might work better for Sanskrit
      const voices = speechSynthesis.getVoices();
      const hindiVoice = voices.find(voice => 
        voice.lang.includes('hi') || voice.lang.includes('sanskrit') || voice.name.toLowerCase().includes('hindi')
      );
      
      if (hindiVoice) {
        utterance.voice = hindiVoice;
      }

      utterance.onstart = () => {
        setIsPlaying(true);
        setIsLoading(false);
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setIsLoading(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        setIsLoading(false);
        console.error('Speech synthesis error');
      };

      utteranceRef.current = utterance;
      speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis not supported in your browser');
    }
  };

  const stopAudio = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsLoading(false);
  };

  return (
    <Button
      onClick={isPlaying ? stopAudio : playAudio}
      disabled={isLoading}
      variant="outline"
      size="sm"
      className={`ripple relative overflow-hidden bg-gradient-to-r from-orange-100 to-yellow-100 hover:from-orange-200 hover:to-yellow-200 border-orange-200 text-orange-800 ${className}`}
    >
      <div className="flex items-center gap-2">
        {isLoading ? (
          <Volume2 className="h-4 w-4 animate-pulse" />
        ) : isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
        <span className="text-xs font-medium">
          {isLoading ? 'Loading...' : isPlaying ? 'Playing' : 'Play Audio'}
        </span>
      </div>
      
      {isPlaying && (
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 animate-pulse w-full"></div>
      )}
    </Button>
  );
};

export default AudioPlayer;
