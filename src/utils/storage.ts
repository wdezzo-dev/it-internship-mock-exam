import { AppStats, FieldStats, WrongAnswer, ExamScore, Question } from '../types';

const STORAGE_KEY = 'qast_exam_stats';

export const getDefaultFieldStats = (): FieldStats => ({
  highestScore: 0,
  totalAttempts: 0,
  lastAttempt: '',
  scores: [],
});

export const getAppStats = (): AppStats => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error reading from localStorage:', e);
  }
  return {
    fieldStats: {},
    wrongAnswers: [],
  };
};

export const saveAppStats = (stats: AppStats): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Error saving to localStorage:', e);
  }
};

export const saveExamScore = (
  fieldId: string,
  score: number,
  total: number
): void => {
  const stats = getAppStats();
  const percentage = Math.round((score / total) * 100);
  const newScore: ExamScore = {
    fieldId,
    score,
    total,
    percentage,
    date: new Date().toISOString(),
  };

  if (!stats.fieldStats[fieldId]) {
    stats.fieldStats[fieldId] = getDefaultFieldStats();
  }

  const fieldStats = stats.fieldStats[fieldId];
  fieldStats.scores.push(newScore);
  fieldStats.totalAttempts += 1;
  fieldStats.lastAttempt = newScore.date;
  
  if (percentage > fieldStats.highestScore) {
    fieldStats.highestScore = percentage;
  }

  // Keep only last 10 scores per field
  if (fieldStats.scores.length > 10) {
    fieldStats.scores = fieldStats.scores.slice(-10);
  }

  saveAppStats(stats);
};

export const saveWrongAnswers = (
  fieldId: string,
  questions: Question[],
  userAnswers: { questionId: string; selectedAnswer: number | null }[]
): void => {
  const stats = getAppStats();
  const date = new Date().toISOString();

  questions.forEach((q, index) => {
    const userAnswer = userAnswers[index]?.selectedAnswer;
    const isWrong = userAnswer !== q.correctAnswer;

    if (isWrong) {
      // Check if this question is already in wrong answers
      const existingIndex = stats.wrongAnswers.findIndex(
        (wa) => wa.questionId === q.id
      );

      const wrongAnswer: WrongAnswer = {
        questionId: q.id,
        fieldId,
        question: q,
        userAnswer,
        date,
      };

      if (existingIndex >= 0) {
        // Update existing wrong answer
        stats.wrongAnswers[existingIndex] = wrongAnswer;
      } else {
        // Add new wrong answer
        stats.wrongAnswers.push(wrongAnswer);
      }
    } else {
      // Remove from wrong answers if answered correctly
      stats.wrongAnswers = stats.wrongAnswers.filter(
        (wa) => wa.questionId !== q.id
      );
    }
  });

  saveAppStats(stats);
};

export const getWrongAnswers = (): WrongAnswer[] => {
  const stats = getAppStats();
  return stats.wrongAnswers;
};

export const getFieldStats = (fieldId: string): FieldStats => {
  const stats = getAppStats();
  return stats.fieldStats[fieldId] || getDefaultFieldStats();
};

export const clearWrongAnswers = (): void => {
  const stats = getAppStats();
  stats.wrongAnswers = [];
  saveAppStats(stats);
};

export const removeWrongAnswer = (questionId: string): void => {
  const stats = getAppStats();
  stats.wrongAnswers = stats.wrongAnswers.filter(
    (wa) => wa.questionId !== questionId
  );
  saveAppStats(stats);
};

export const clearAllStats = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
