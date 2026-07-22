import { useState } from 'react';
import { ExamField, UserAnswer, ExamState, FullTestConfig } from './types';
import { examFields } from './data';
import { saveExamScore, saveWrongAnswers, getWrongAnswers } from './utils/storage';
import { randomizeAllQuestions, getRandomQuestionsFromAllFields, shuffleQuestions } from './utils/questionHelpers';
import HomePage from './components/HomePage';
import ExamPage from './components/ExamPage';
import ResultsPage from './components/ResultsPage';
import ReviewPage from './components/ReviewPage';
import FullTestSetup from './components/FullTestSetup';
import PracticeWrongPage from './components/PracticeWrongPage';

export default function App() {
  const [examState, setExamState] = useState<ExamState>('home');
  const [selectedField, setSelectedField] = useState<ExamField | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [timeSpent, setTimeSpent] = useState(0);
  const [isFullTest, setIsFullTest] = useState(false);
  const [fullTestConfig, setFullTestConfig] = useState<FullTestConfig | null>(null);
  const [isPracticeMode, setIsPracticeMode] = useState(false);

  const handleStartExam = (field: ExamField) => {
    // Randomize answer positions for fairness
    const randomizedQuestions = randomizeAllQuestions(field.questions);
    const randomizedField = { ...field, questions: randomizedQuestions };
    
    setSelectedField(randomizedField);
    setUserAnswers(
      randomizedQuestions.map((q) => ({ questionId: q.id, selectedAnswer: null }))
    );
    setIsFullTest(false);
    setIsPracticeMode(false);
    setExamState('exam');
  };

  const handleStartFullTest = (config: FullTestConfig) => {
    setFullTestConfig(config);
    
    // Get random questions from all fields
    const selected = getRandomQuestionsFromAllFields(examFields, config.questionCount);
    
    // Randomize options and shuffle order
    const finalQuestions = shuffleQuestions(randomizeAllQuestions(selected));

    const fullTestField: ExamField = {
      id: 'fulltest',
      name: 'Full Test',
      icon: '🎯',
      color: 'from-indigo-500 to-purple-500',
      description: `Random ${config.questionCount} questions from all fields`,
      questions: finalQuestions,
    };

    setSelectedField(fullTestField);
    setUserAnswers(
      finalQuestions.map((q) => ({ questionId: q.id, selectedAnswer: null }))
    );
    setIsFullTest(true);
    setIsPracticeMode(false);
    setExamState('exam');
  };

  const handleStartPracticeWrong = () => {
    const wrongAnswers = getWrongAnswers();
    if (wrongAnswers.length === 0) return;

    // Randomize options for practice questions
    const practiceQuestions = randomizeAllQuestions(wrongAnswers.map(wa => wa.question));
    
    const practiceField: ExamField = {
      id: 'practice',
      name: 'Practice Wrong Answers',
      icon: '🔄',
      color: 'from-orange-500 to-red-500',
      description: 'Review and practice your previously wrong answers',
      questions: practiceQuestions,
    };

    setSelectedField(practiceField);
    setUserAnswers(
      practiceQuestions.map((q) => ({ questionId: q.id, selectedAnswer: null }))
    );
    setIsFullTest(false);
    setIsPracticeMode(true);
    setExamState('exam');
  };

  const handleFinishExam = (answers: UserAnswer[], time: number) => {
    setUserAnswers(answers);
    setTimeSpent(time);
    
    if (selectedField) {
      // Save score
      const correctCount = selectedField.questions.reduce((count, q, i) => {
        return count + (answers[i]?.selectedAnswer === q.correctAnswer ? 1 : 0);
      }, 0);

      if (!isFullTest && !isPracticeMode) {
        saveExamScore(selectedField.id, correctCount, selectedField.questions.length);
      } else if (isFullTest) {
        saveExamScore('fulltest', correctCount, selectedField.questions.length);
      }

      // Save wrong answers (for all modes)
      const fieldId = isPracticeMode ? 'practice' : (isFullTest ? 'fulltest' : selectedField.id);
      saveWrongAnswers(fieldId, selectedField.questions, answers);
    }
    
    setExamState('results');
  };

  const handleReview = () => {
    setExamState('review');
  };

  const handleBackToResults = () => {
    setExamState('results');
  };

  const handleBackToHome = () => {
    setExamState('home');
    setSelectedField(null);
    setUserAnswers([]);
    setTimeSpent(0);
    setIsFullTest(false);
    setFullTestConfig(null);
    setIsPracticeMode(false);
  };

  const handleOpenFullTestSetup = () => {
    setExamState('fullTestSetup');
  };

  const handleOpenPracticeWrong = () => {
    setExamState('practiceWrong');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {examState === 'home' && (
        <HomePage 
          fields={examFields} 
          onStartExam={handleStartExam}
          onOpenFullTest={handleOpenFullTestSetup}
          onOpenPracticeWrong={handleOpenPracticeWrong}
        />
      )}
      {examState === 'fullTestSetup' && (
        <FullTestSetup
          onStart={handleStartFullTest}
          onBack={handleBackToHome}
        />
      )}
      {examState === 'practiceWrong' && (
        <PracticeWrongPage
          onStartPractice={handleStartPracticeWrong}
          onBack={handleBackToHome}
        />
      )}
      {examState === 'exam' && selectedField && (
        <ExamPage
          field={selectedField}
          onFinish={handleFinishExam}
          onQuit={handleBackToHome}
          customTime={isFullTest && fullTestConfig ? fullTestConfig.timeMinutes * 60 : undefined}
          isPractice={isPracticeMode}
        />
      )}
      {examState === 'results' && selectedField && (
        <ResultsPage
          field={selectedField}
          userAnswers={userAnswers}
          timeSpent={timeSpent}
          onReview={handleReview}
          onBackToHome={handleBackToHome}
          isFullTest={isFullTest}
          isPractice={isPracticeMode}
        />
      )}
      {examState === 'review' && selectedField && (
        <ReviewPage
          field={selectedField}
          userAnswers={userAnswers}
          onBack={handleBackToResults}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
}
