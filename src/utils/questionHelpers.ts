import { Question } from '../types';

/**
 * Shuffles an array using Fisher-Yates algorithm
 */
function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Randomizes the order of options for a question and updates the correctAnswer index
 * This ensures the correct answer isn't always in the same position
 */
export function randomizeQuestionOptions(question: Question): Question {
  // Create array of {text, isCorrect}
  const optionsWithMeta = question.options.map((opt, idx) => ({
    text: opt,
    isCorrect: idx === question.correctAnswer,
  }));

  // Shuffle
  const shuffled = shuffleArray(optionsWithMeta);

  // Find the new index of the correct answer
  const newCorrectIndex = shuffled.findIndex((opt) => opt.isCorrect);

  return {
    ...question,
    options: shuffled.map((opt) => opt.text),
    correctAnswer: newCorrectIndex,
  };
}

/**
 * Randomizes all questions in an array
 */
export function randomizeAllQuestions(questions: Question[]): Question[] {
  return questions.map(randomizeQuestionOptions);
}

/**
 * Shuffles questions in random order
 */
export function shuffleQuestions(questions: Question[]): Question[] {
  return shuffleArray(questions);
}

/**
 * Get a random sample of questions from all fields
 */
export function getRandomQuestionsFromAllFields(
  fields: { questions: Question[]; id: string }[],
  count: number
): Question[] {
  // Combine all questions with field prefix in ID
  const allQuestions: Question[] = [];
  fields.forEach((field) => {
    field.questions.forEach((q) => {
      allQuestions.push({
        ...q,
        id: `${field.id}-${q.id}`,
      });
    });
  });

  // Shuffle and take the requested count
  const shuffled = shuffleArray(allQuestions);
  return shuffled.slice(0, count);
}
