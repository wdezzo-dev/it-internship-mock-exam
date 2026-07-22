import { ExamField, UserAnswer } from '../types';
import { getFieldStats } from '../utils/storage';

interface ResultsPageProps {
  field: ExamField;
  userAnswers: UserAnswer[];
  timeSpent: number;
  onReview: () => void;
  onBackToHome: () => void;
  isFullTest?: boolean;
  isPractice?: boolean;
}

export default function ResultsPage({
  field,
  userAnswers,
  timeSpent,
  onReview,
  onBackToHome,
  isFullTest = false,
  isPractice = false,
}: ResultsPageProps) {
  const totalQuestions = field.questions.length;
  const correctCount = field.questions.reduce((count, q, i) => {
    return count + (userAnswers[i]?.selectedAnswer === q.correctAnswer ? 1 : 0);
  }, 0);
  const wrongCount = totalQuestions - correctCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = percentage >= 60;

  const fieldStats = getFieldStats(isFullTest ? 'fulltest' : field.id);
  const isNewHighScore = !isPractice && percentage > fieldStats.highestScore && fieldStats.totalAttempts > 0;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  const getGrade = () => {
    if (percentage >= 90) return { letter: 'A+', color: 'text-green-400', msg: 'Outstanding! You\'re well prepared!' };
    if (percentage >= 80) return { letter: 'A', color: 'text-green-400', msg: 'Excellent work! Almost perfect!' };
    if (percentage >= 70) return { letter: 'B', color: 'text-blue-400', msg: 'Good job! Keep studying the weak areas.' };
    if (percentage >= 60) return { letter: 'C', color: 'text-yellow-400', msg: 'You passed! But review the mistakes.' };
    if (percentage >= 50) return { letter: 'D', color: 'text-orange-400', msg: 'Almost there. Focus on the topics you missed.' };
    return { letter: 'F', color: 'text-red-400', msg: 'Needs more preparation. Review all topics thoroughly.' };
  };

  const grade = getGrade();

  // Calculate radius and circumference for the circle
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Header */}
      <div className="bg-gray-900/95 border-b border-gray-800 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl">{field.icon}</span>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold text-white">{field.name} — Results</h1>
              {isPractice && (
                <span className="bg-orange-500/15 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-orange-500/30">
                  PRACTICE
                </span>
              )}
              {isFullTest && (
                <span className="bg-purple-500/15 text-purple-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-purple-500/30">
                  FULL TEST
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onBackToHome}
            className="text-gray-400 hover:text-white text-sm flex items-center gap-1.5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
            </svg>
            Home
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        {/* New High Score Badge */}
        {isNewHighScore && (
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 rounded-full text-sm font-bold animate-pulse">
              🏆 New High Score! Previous: {fieldStats.highestScore}%
            </span>
          </div>
        )}

        {/* Score Card */}
        <div className={`rounded-2xl border p-8 mb-6 ${
          isPractice
            ? 'bg-gradient-to-br from-orange-500/5 to-red-500/5 border-orange-500/20'
            : passed
              ? 'bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/20'
              : 'bg-gradient-to-br from-red-500/5 to-orange-500/5 border-red-500/20'
        }`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Score Circle */}
            <div className="relative flex-shrink-0">
              <svg className="w-44 h-44 -rotate-90" viewBox="0 0 160 160">
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke="currentColor"
                  className="text-gray-800"
                  strokeWidth="8"
                />
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke="currentColor"
                  className={
                    isPractice 
                      ? 'text-orange-500' 
                      : passed ? 'text-green-500' : 'text-red-500'
                  }
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-white">{percentage}%</span>
                <span className={`text-lg font-bold ${grade.color}`}>{grade.letter}</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              {!isPractice && (
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                  passed
                    ? 'bg-green-500/15 text-green-400'
                    : 'bg-red-500/15 text-red-400'
                }`}>
                  {passed ? '✅ PASSED' : '❌ FAILED'}
                </div>
              )}
              {isPractice && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 bg-orange-500/15 text-orange-400">
                  🔄 Practice Complete
                </div>
              )}
              <h2 className="text-2xl font-bold text-white mb-2">
                {correctCount} out of {totalQuestions} correct
              </h2>
              <p className={`text-sm mb-4 ${grade.color}`}>{grade.msg}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-gray-900/60 rounded-xl p-3 border border-gray-800">
                  <div className="text-xs text-gray-500 mb-1">Correct</div>
                  <div className="text-xl font-bold text-green-400">{correctCount}</div>
                </div>
                <div className="bg-gray-900/60 rounded-xl p-3 border border-gray-800">
                  <div className="text-xs text-gray-500 mb-1">Wrong</div>
                  <div className="text-xl font-bold text-red-400">{wrongCount}</div>
                </div>
                <div className="bg-gray-900/60 rounded-xl p-3 border border-gray-800">
                  <div className="text-xs text-gray-500 mb-1">Time</div>
                  <div className="text-xl font-bold text-blue-400">{formatTime(timeSpent)}</div>
                </div>
                <div className="bg-gray-900/60 rounded-xl p-3 border border-gray-800">
                  <div className="text-xs text-gray-500 mb-1">Score</div>
                  <div className="text-xl font-bold text-purple-400">{percentage}%</div>
                </div>
              </div>

              {/* Best Score info */}
              {!isPractice && fieldStats.totalAttempts > 0 && (
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                  <span>🏆 Best: {Math.max(fieldStats.highestScore, percentage)}%</span>
                  <span>📊 Attempts: {fieldStats.totalAttempts}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <button
            onClick={onReview}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-white rounded-xl font-semibold transition-all shadow-lg ${
              isPractice
                ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-orange-500/20'
                : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-indigo-500/20'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Review All Answers
          </button>
          <button
            onClick={onBackToHome}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl font-medium transition-colors border border-gray-700"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            {isPractice ? 'Back to Home' : 'Try Another Exam'}
          </button>
        </div>

        {/* Quick Summary */}
        <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-gray-400 mb-4">Quick Summary</h3>
          <div className="grid grid-cols-10 sm:grid-cols-25 gap-1.5">
            {field.questions.map((q, i) => {
              const isCorrect = userAnswers[i]?.selectedAnswer === q.correctAnswer;
              const isUnanswered = userAnswers[i]?.selectedAnswer === null;
              return (
                <div
                  key={i}
                  className={`aspect-square rounded flex items-center justify-center text-[10px] font-bold ${
                    isUnanswered
                      ? 'bg-gray-800 text-gray-600'
                      : isCorrect
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                  title={`Q${i+1}: ${isUnanswered ? 'Unanswered' : isCorrect ? 'Correct' : 'Wrong'}`}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 mt-4 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-green-500/20 border border-green-500/30" />
              Correct
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-red-500/20 border border-red-500/30" />
              Wrong
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-gray-800" />
              Unanswered
            </div>
          </div>
        </div>

        {/* Tip for wrong answers */}
        {wrongCount > 0 && !isPractice && (
          <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div>
              <p className="text-sm text-orange-300 font-medium">Tip: Practice your wrong answers</p>
              <p className="text-xs text-gray-400 mt-1">
                Your {wrongCount} wrong answers have been saved. Go to "Practice Wrong Answers" from the home page to review and improve!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
