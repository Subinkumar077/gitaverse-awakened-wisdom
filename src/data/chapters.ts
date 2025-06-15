
import { Shloka, popularShlokas } from './shlokas';

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  totalVerses: number;
  summary: string;
  keyTeachings: string[];
  quiz: QuizQuestion[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Arjuna Vishada Yoga",
    subtitle: "The Yoga of Arjuna's Dejection",
    totalVerses: 47,
    summary: "This chapter sets the stage for the entire Bhagavad Gita. Arjuna, seeing his relatives and teachers on the battlefield, becomes overwhelmed with sorrow and refuses to fight. This moral crisis leads to his surrender to Krishna, seeking guidance on dharma (righteous duty).",
    keyTeachings: [
      "The importance of dharma (righteous duty) over personal emotions",
      "Seeking guidance from a qualified teacher in times of moral confusion",
      "Understanding the difference between material attachment and spiritual duty",
      "The courage to face difficult decisions in life"
    ],
    quiz: [
      {
        id: 1,
        question: "Why does Arjuna refuse to fight in the battle?",
        options: [
          "He is afraid of losing the battle",
          "He doesn't want to kill his relatives and teachers",
          "He wants to become a renunciant",
          "He doesn't trust Krishna's guidance"
        ],
        correctAnswer: 1,
        explanation: "Arjuna is overwhelmed by seeing his beloved family members and teachers on the opposing side and cannot bear the thought of fighting against them."
      },
      {
        id: 2,
        question: "What does Arjuna do when he becomes confused about his duty?",
        options: [
          "He decides to run away from the battlefield",
          "He asks his soldiers for advice",
          "He surrenders to Krishna and asks for guidance",
          "He meditates to find the answer himself"
        ],
        correctAnswer: 2,
        explanation: "Arjuna recognizes his confusion and surrenders to Krishna as his teacher, asking for guidance on what is truly right."
      },
      {
        id: 3,
        question: "What is the main theme of Chapter 1?",
        options: [
          "The glory of war",
          "The importance of family bonds",
          "The moral dilemma between duty and emotion",
          "The power of meditation"
        ],
        correctAnswer: 2,
        explanation: "Chapter 1 presents the fundamental conflict between emotional attachment and dharmic duty that sets up the entire teaching of the Gita."
      }
    ]
  },
  {
    id: 2,
    title: "Sankhya Yoga",
    subtitle: "The Yoga of Knowledge",
    totalVerses: 72,
    summary: "Krishna begins his teaching by explaining the eternal nature of the soul and the temporary nature of the body. He introduces the concept of dharma and encourages Arjuna to perform his duty without attachment to results.",
    keyTeachings: [
      "The soul is eternal and indestructible",
      "The body is temporary and subject to change",
      "Performing duty without attachment to results",
      "The importance of equipoise in success and failure"
    ],
    quiz: [
      {
        id: 1,
        question: "According to Krishna, what is the nature of the soul?",
        options: [
          "It is born and dies with the body",
          "It is eternal and indestructible",
          "It can be destroyed by weapons",
          "It changes with each lifetime"
        ],
        correctAnswer: 1,
        explanation: "Krishna teaches that the soul is eternal, indestructible, and only changes bodies like a person changes clothes."
      },
      {
        id: 2,
        question: "What does Krishna advise about performing actions?",
        options: [
          "Avoid all actions to prevent karma",
          "Perform actions with attachment to results",
          "Perform duty without attachment to results",
          "Only perform pleasant actions"
        ],
        correctAnswer: 2,
        explanation: "Krishna introduces the principle of Nishkama Karma - performing one's duty without attachment to the fruits of action."
      }
    ]
  }
];

// Function to get shlokas by chapter
export const getShlokasByChapter = (chapterId: number): Shloka[] => {
  // For demo purposes, we'll return the first few shlokas for each chapter
  // In a complete implementation, this would filter shlokas by actual chapter
  return popularShlokas.filter(shloka => shloka.chapter === chapterId);
};

// Function to get chapter by ID
export const getChapterById = (id: number): Chapter | undefined => {
  return chapters.find(chapter => chapter.id === id);
};
