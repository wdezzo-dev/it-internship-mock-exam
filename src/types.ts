export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ExamField {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  questions: Question[];
}

export interface UserAnswer {
  questionId: string;
  selectedAnswer: number | null;
}

export type ExamState = 'home' | 'exam' | 'results' | 'review' | 'fullTestSetup' | 'practiceWrong';

export interface ExamScore {
  fieldId: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
}

export interface FieldStats {
  highestScore: number;
  totalAttempts: number;
  lastAttempt: string;
  scores: ExamScore[];
}

export interface WrongAnswer {
  questionId: string;
  fieldId: string;
  question: Question;
  userAnswer: number | null;
  date: string;
}

export interface AppStats {
  fieldStats: Record<string, FieldStats>;
  wrongAnswers: WrongAnswer[];
}

export interface FullTestConfig {
  questionCount: number;
  timeMinutes: number;
}
