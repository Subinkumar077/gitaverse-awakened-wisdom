
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shloka } from '@/data/shlokas';

interface AIExplanationProps {
  shloka: Shloka;
}

// Demo AI explanations for popular shlokas
const demoExplanations: Record<string, string> = {
  "bg-2-47": "This famous verse teaches us about 'Nishkama Karma' - performing actions without attachment to results. In today's world, this means giving your 100% effort at work or studies, but not being stressed about grades, promotions, or outcomes. Think of a farmer who plants seeds with care but doesn't worry about the weather - he focuses on what he can control. This reduces anxiety and helps us perform better because we're not paralyzed by fear of failure. Modern psychology calls this 'process focus' rather than 'outcome focus' - and it's proven to increase both performance and happiness.",
  
  "bg-4-7": "This verse explains that whenever evil increases and good decreases in the world, divine intervention happens - not necessarily as a person, but through awakened individuals, social movements, or circumstances that restore balance. Think of how great leaders emerge during crises, or how disasters bring out humanity's compassion. In our personal lives, it means that when we're facing our darkest moments, help often comes in unexpected ways. The 'divine manifestation' could be a friend's advice, a book that changes our perspective, or inner strength we didn't know we had.",
  
  "bg-18-66": "This is Krishna's final advice - complete surrender doesn't mean being passive, but trusting the process of life while doing your best. It's like learning to swim: you need to relax and trust the water will hold you up, while still moving your arms and legs. In modern life, this means accepting that some things are beyond our control (like others' reactions, economic conditions, health issues) while taking full responsibility for our choices and efforts. The 'fear not' part reminds us that when we align with dharma (righteous action), the universe supports us.",
  
  "bg-2-14": "This verse teaches emotional resilience - understanding that happiness and sadness are temporary, like seasons. In today's instant-gratification culture, we often think happiness should be permanent and pain should be avoided. But Krishna explains that both are natural parts of life. Think of how a breakup feels devastating, but later you realize it led to personal growth. Or how losing a job initially feels terrible but opens doors to better opportunities. The key is developing 'titiksha' (forbearance) - neither getting too excited by success nor too depressed by failure.",
  
  "bg-3-27": "This verse addresses the ego's illusion of control. We think 'I did this, I achieved that,' but actually, countless factors contributed - our genes, education, society, opportunities, even the oxygen we breathe. It's like a wave thinking it created itself, ignoring the ocean. This doesn't make us powerless, but humble. In practical terms, it means taking responsibility for our efforts while being grateful for favorable circumstances. Success becomes less about ego-boosting and failure less about self-blame. This leads to both confidence (knowing you'll give your best) and peace (accepting what's beyond your control).",
  
  "bg-6-5": "This powerful verse about self-responsibility reminds us that we are both our own best friend and worst enemy. Your mind can either elevate you to great heights or drag you into depression and self-doubt. In the age of social media and external validation, this teaching is crucial. Instead of blaming circumstances, parents, or society for our problems, we must take charge of our mental state. Practices like meditation, positive self-talk, and choosing empowering thoughts become essential. The same mind that creates anxiety can create confidence - it's our choice how we direct it."
};

const AIExplanation: React.FC<AIExplanationProps> = ({ shloka }) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanation, setExplanation] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const generateExplanation = async () => {
    if (explanation) {
      setShowExplanation(!showExplanation);
      return;
    }

    setIsLoading(true);
    
    // For demo purposes, use pre-written explanations
    // In a real app, this would call the Gemini API
    setTimeout(() => {
      const demoExplanation = demoExplanations[shloka.id] || 
        `This beautiful verse from Chapter ${shloka.chapter} teaches us profound wisdom that applies to modern life. The Sanskrit text emphasizes the importance of dharmic living - acting in accordance with righteousness and truth. In today's fast-paced world, this means making decisions based on what's right rather than what's convenient. Think of it as building a strong moral compass that guides you through difficult choices. This teaching encourages us to look beyond immediate gratification and consider the long-term impact of our actions on ourselves and others. The practical application involves daily reflection on our motivations and choosing actions that align with our highest values.`;
      
      setExplanation(demoExplanation);
      setShowExplanation(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="mb-6">
      <Button
        onClick={generateExplanation}
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-medium py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>Generating AI Explanation...</span>
          </div>
        ) : (
          <span>
            {explanation ? (showExplanation ? 'Hide' : 'Show') : 'Get'} AI Explanation & Life Application
          </span>
        )}
      </Button>

      {showExplanation && explanation && (
        <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200">
          <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Modern Wisdom & Life Application
          </h4>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default AIExplanation;
