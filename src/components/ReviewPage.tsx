import { useState, useEffect } from 'react';
import { ExamField, UserAnswer } from '../types';

interface ReviewPageProps {
  field: ExamField;
  userAnswers: UserAnswer[];
  onBack: () => void;
  onBackToHome: () => void;
}

type FilterType = 'all' | 'correct' | 'wrong';

export default function ReviewPage({ field, userAnswers, onBack, onBackToHome }: ReviewPageProps) {
  const [filter, setFilter] = useState<FilterType>('all');
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const questionsWithResults = field.questions.map((q, i) => {
    const userAnswer = userAnswers[i]?.selectedAnswer;
    const isCorrect = userAnswer === q.correctAnswer;
    const isUnanswered = userAnswer === null;
    return { question: q, userAnswer, isCorrect, isUnanswered, index: i };
  });

  const filteredQuestions = questionsWithResults.filter((q) => {
    if (filter === 'correct') return q.isCorrect;
    if (filter === 'wrong') return !q.isCorrect;
    return true;
  });

  const correctCount = questionsWithResults.filter((q) => q.isCorrect).length;
  const wrongCount = questionsWithResults.filter((q) => !q.isCorrect).length;

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't interfere with input elements
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      // Arrow keys to navigate between questions
      if (e.key === 'ArrowDown' || e.key === 'j') {
        e.preventDefault();
        const currentIdx = filteredQuestions.findIndex(q => q.index === expandedQuestion);
        if (expandedQuestion === null && filteredQuestions.length > 0) {
          setExpandedQuestion(filteredQuestions[0].index);
        } else if (currentIdx < filteredQuestions.length - 1) {
          setExpandedQuestion(filteredQuestions[currentIdx + 1].index);
          // Scroll to the new question
          setTimeout(() => {
            const el = document.getElementById(`review-q-${filteredQuestions[currentIdx + 1].index}`);
            el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 50);
        }
        return;
      }

      if (e.key === 'ArrowUp' || e.key === 'k') {
        e.preventDefault();
        const currentIdx = filteredQuestions.findIndex(q => q.index === expandedQuestion);
        if (currentIdx > 0) {
          setExpandedQuestion(filteredQuestions[currentIdx - 1].index);
          setTimeout(() => {
            const el = document.getElementById(`review-q-${filteredQuestions[currentIdx - 1].index}`);
            el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 50);
        }
        return;
      }

      // Enter to toggle expand/collapse
      if (e.key === 'Enter' && expandedQuestion !== null) {
        e.preventDefault();
        setExpandedQuestion(null);
        return;
      }

      // Escape to collapse all
      if (e.key === 'Escape') {
        setExpandedQuestion(null);
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredQuestions, expandedQuestion]);

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-xl">{field.icon}</span>
              <div>
                <h1 className="text-sm font-semibold text-white">{field.name} — Review</h1>
                <p className="text-xs text-gray-500">
                  {correctCount} correct, {wrongCount} wrong
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
                <kbd className="px-1.5 py-0.5 bg-gray-800 rounded font-mono text-[10px]">↓↑</kbd>
                <span>navigate</span>
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
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-4xl mx-auto w-full px-4 pt-6 pb-2 sticky top-14 z-10 bg-gray-950">
        <div className="flex gap-2 bg-gray-900/60 p-1 rounded-xl border border-gray-800 w-fit backdrop-blur-sm">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-gray-800 text-white'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            All ({field.questions.length})
          </button>
          <button
            onClick={() => setFilter('correct')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === 'correct'
                ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            ✓ Correct ({correctCount})
          </button>
          <button
            onClick={() => setFilter('wrong')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === 'wrong'
                ? 'bg-red-500/15 text-red-400 border border-red-500/30'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            ✗ Wrong ({wrongCount})
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-4 space-y-3">
        {filteredQuestions.map((item) => {
          const isExpanded = expandedQuestion === item.index;

          return (
            <div
              key={item.question.id}
              id={`review-q-${item.index}`}
              className={`rounded-2xl border transition-all ${
                item.isCorrect
                  ? 'bg-gray-900/60 border-green-500/20'
                  : 'bg-gray-900/60 border-red-500/20'
              }`}
            >
              {/* Question Header */}
              <button
                onClick={() => setExpandedQuestion(isExpanded ? null : item.index)}
                className="w-full flex items-start gap-3 p-5 text-left"
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                  item.isCorrect
                    ? 'bg-green-500/15 text-green-400'
                    : 'bg-red-500/15 text-red-400'
                }`}>
                  {item.isCorrect ? '✓' : '✗'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500 font-medium">Q{item.index + 1}</span>
                    {item.isUnanswered && (
                      <span className="text-xs bg-yellow-500/15 text-yellow-400 px-2 py-0.5 rounded-full">
                        Unanswered
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base text-white font-medium leading-relaxed">
                    {item.question.question}
                  </h3>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-0 animate-fade-in">
                  <div className="space-y-2 mb-4">
                    {item.question.options.map((option, optIndex) => {
                      const isCorrectOption = optIndex === item.question.correctAnswer;
                      const isUserChoice = optIndex === item.userAnswer;
                      const isWrongChoice = isUserChoice && !isCorrectOption;

                      let optionStyle = 'border-gray-800 bg-gray-800/20 text-gray-500';
                      if (isCorrectOption) {
                        optionStyle = 'border-green-500/50 bg-green-500/10 text-green-300';
                      } else if (isWrongChoice) {
                        optionStyle = 'border-red-500/50 bg-red-500/10 text-red-300';
                      }

                      return (
                        <div
                          key={optIndex}
                          className={`flex items-start gap-3 p-3.5 rounded-xl border-2 ${optionStyle}`}
                        >
                          <span className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                            isCorrectOption
                              ? 'bg-green-500 text-white'
                              : isWrongChoice
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-700 text-gray-500'
                          }`}>
                            {isCorrectOption ? '✓' : isWrongChoice ? '✗' : String.fromCharCode(65 + optIndex)}
                          </span>
                          <span className="text-sm leading-relaxed flex-1">{option}</span>
                          {isCorrectOption && (
                            <span className="text-xs text-green-400 font-medium flex-shrink-0">
                              Correct
                            </span>
                          )}
                          {isWrongChoice && (
                            <span className="text-xs text-red-400 font-medium flex-shrink-0">
                              Your answer
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wide">Explanation</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.question.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredQuestions.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">🎉</div>
            <p className="text-gray-400">
              {filter === 'wrong' ? 'No wrong answers! Perfect score!' : 'No matching questions.'}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="sticky bottom-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 py-3 px-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Results
          </button>
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 px-5 py-2 bg-indigo-500/15 text-indigo-400 hover:bg-indigo-500/25 rounded-xl text-sm font-medium transition-colors border border-indigo-500/20"
          >
            Take Another Exam
          </button>
        </div>
      </div>
    </div>
  );
}
