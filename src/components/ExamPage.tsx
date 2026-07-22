import { useState, useEffect, useCallback, useRef } from 'react';
import { ExamField, UserAnswer } from '../types';

interface ExamPageProps {
  field: ExamField;
  onFinish: (answers: UserAnswer[], timeSpent: number) => void;
  onQuit: () => void;
  customTime?: number; // in seconds
  isPractice?: boolean;
}

const DEFAULT_EXAM_DURATION = 60 * 60; // 60 minutes in seconds

export default function ExamPage({ field, onFinish, onQuit, customTime, isPractice }: ExamPageProps) {
  const examDuration = customTime || DEFAULT_EXAM_DURATION;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>(
    field.questions.map((q) => ({ questionId: q.id, selectedAnswer: null }))
  );
  const [timeLeft, setTimeLeft] = useState(examDuration);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const startTimeRef = useRef(Date.now());
  const [justSelected, setJustSelected] = useState<number | null>(null);

  const handleFinish = useCallback(() => {
    const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
    onFinish(answers, timeSpent);
  }, [answers, onFinish]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [handleFinish]);

  const handleAnswer = (optionIndex: number) => {
    setAnswers((prev) =>
      prev.map((a, i) =>
        i === currentQuestion ? { ...a, selectedAnswer: optionIndex } : a
      )
    );
    setJustSelected(optionIndex);
    // Clear animation after 200ms
    setTimeout(() => setJustSelected(null), 200);
  };

  const handleNext = useCallback(() => {
    setCurrentQuestion((prev) => Math.min(field.questions.length - 1, prev + 1));
  }, [field.questions.length]);

  const handlePrev = useCallback(() => {
    setCurrentQuestion((prev) => Math.max(0, prev - 1));
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if inside modal
      if (showConfirmSubmit || showQuitConfirm) {
        if (e.key === 'Enter') {
          // If Enter, submit
          if (showConfirmSubmit) {
            handleFinish();
          }
        }
        if (e.key === 'Escape') {
          setShowConfirmSubmit(false);
          setShowQuitConfirm(false);
        }
        return;
      }

      // Number keys 1-4 to select option A-D
      if (['1', '2', '3', '4'].includes(e.key)) {
        const index = parseInt(e.key) - 1;
        handleAnswer(index);
        e.preventDefault();
        return;
      }

      // Enter to go next (or submit if last question)
      if (e.key === 'Enter') {
        if (currentQuestion === field.questions.length - 1) {
          setShowConfirmSubmit(true);
        } else {
          handleNext();
        }
        e.preventDefault();
        return;
      }

      // Arrow right to go next
      if (e.key === 'ArrowRight') {
        handleNext();
        e.preventDefault();
        return;
      }

      // Arrow left to go prev
      if (e.key === 'ArrowLeft') {
        handlePrev();
        e.preventDefault();
        return;
      }

      // Escape to quit
      if (e.key === 'Escape') {
        setShowQuitConfirm(true);
        e.preventDefault();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestion, field.questions.length, handleNext, handlePrev, handleFinish, showConfirmSubmit, showQuitConfirm]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const answeredCount = answers.filter((a) => a.selectedAnswer !== null).length;
  const question = field.questions[currentQuestion];
  const timeWarning = timeLeft < 300;
  const timeCritical = timeLeft < 60;

  const accent = isPractice ? 'orange' : 'indigo';
  const accentClass = {
    bg: isPractice ? 'bg-orange-500' : 'bg-indigo-500',
    bgHover: isPractice ? 'hover:bg-orange-600' : 'hover:bg-indigo-600',
    border: isPractice ? 'border-orange-500' : 'border-indigo-500',
    text: isPractice ? 'text-orange-400' : 'text-indigo-400',
    bgLight: isPractice ? 'bg-orange-500/10' : 'bg-indigo-500/10',
    bgLight2: isPractice ? 'bg-orange-500/20' : 'bg-indigo-500/20',
    borderLight: isPractice ? 'border-orange-500/30' : 'border-indigo-500/30',
    borderLightHover: isPractice ? 'hover:border-orange-500/50' : 'hover:border-indigo-500/50',
    hoverBg: isPractice ? 'hover:bg-orange-500/10' : 'hover:bg-indigo-500/10',
    ring: isPractice ? 'ring-orange-400' : 'ring-indigo-400',
    gradient: isPractice 
      ? 'from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-orange-500/25' 
      : 'from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-indigo-500/25',
    progressBar: isPractice 
      ? 'bg-gradient-to-r from-orange-500 to-red-500' 
      : 'bg-gradient-to-r from-indigo-500 to-purple-500',
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Top Bar */}
      <div className="sticky top-0 z-20 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">{field.icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-semibold text-white">{field.name}</h1>
                  {isPractice && (
                    <span className="bg-orange-500/15 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-orange-500/30">
                      PRACTICE
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500">{answeredCount}/{field.questions.length} answered</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-gray-500 bg-gray-800/50`}>
                <kbd className="px-1.5 py-0.5 bg-gray-700 rounded text-[10px] text-gray-300 font-mono">1-4</kbd>
                select
                <kbd className="px-1.5 py-0.5 bg-gray-700 rounded text-[10px] text-gray-300 font-mono ml-1">↵</kbd>
                next
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-mono font-bold ${
                timeCritical ? 'bg-red-500/20 text-red-400 animate-pulse' :
                timeWarning ? 'bg-yellow-500/15 text-yellow-400' :
                'bg-gray-800 text-gray-300'
              }`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {formatTime(timeLeft)}
              </div>
              <button
                onClick={() => setShowQuitConfirm(true)}
                className="text-gray-500 hover:text-red-400 transition-colors p-1.5 rounded-lg hover:bg-gray-800"
                title="Quit exam (Esc)"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${accentClass.progressBar}`}
              style={{ width: `${(answeredCount / field.questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Question Area */}
        <div className="flex-1 min-w-0">
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 sm:p-8">
            {/* Question Number */}
            <div className="flex items-center gap-2 mb-6">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                isPractice 
                  ? 'bg-orange-500/15 text-orange-400'
                  : 'bg-indigo-500/15 text-indigo-400'
              }`}>
                Question {currentQuestion + 1} of {field.questions.length}
              </span>
              {answers[currentQuestion].selectedAnswer !== null && (
                <span className="bg-green-500/15 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Answered
                </span>
              )}
            </div>

            {/* Question Text */}
            <h2 className="text-lg sm:text-xl font-semibold text-white leading-relaxed mb-8">
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = answers[currentQuestion].selectedAnswer === index;
                const justPicked = justSelected === index;
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 group ${
                      isSelected
                        ? `${accentClass.border} ${accentClass.bgLight} text-white shadow-lg shadow-${accent}-500/10`
                        : 'border-gray-800 bg-gray-800/30 text-gray-300 hover:border-gray-600 hover:bg-gray-800/60'
                    } ${justPicked ? 'scale-[0.99]' : ''}`}
                  >
                    <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                      isSelected
                        ? `${accentClass.bg} text-white`
                        : 'bg-gray-800 text-gray-500 group-hover:bg-gray-700'
                    }`}>
                      {isSelected ? '✓' : String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed pt-1 flex-1">{option}</span>
                    <kbd className={`hidden sm:inline-block flex-shrink-0 px-2 py-1 rounded text-[10px] font-mono transition-all ${
                      isSelected 
                        ? `${accentClass.bgLight2} ${accentClass.text} border ${accentClass.borderLight}`
                        : 'bg-gray-800/80 text-gray-600 group-hover:bg-gray-700 group-hover:text-gray-400'
                    }`}>
                      {index + 1}
                    </kbd>
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-800">
              <button
                onClick={handlePrev}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="hidden md:flex items-center gap-2 text-xs text-gray-600">
                <kbd className="px-1.5 py-0.5 bg-gray-800 rounded font-mono">←</kbd>
                <kbd className="px-1.5 py-0.5 bg-gray-800 rounded font-mono">→</kbd>
                to navigate
              </div>

              {currentQuestion === field.questions.length - 1 ? (
                <button
                  onClick={() => setShowConfirmSubmit(true)}
                  className={`flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r ${accentClass.gradient} text-white rounded-xl text-sm font-semibold transition-all shadow-lg`}
                >
                  Submit
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${accentClass.text} ${accentClass.hoverBg}`}
                >
                  <span className="hidden sm:inline">Next</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Question Grid Navigator */}
        <div className="lg:w-72 flex-shrink-0">
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-5 sticky top-24">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Question Navigator</h3>
            <div className={`grid gap-1.5 ${
              field.questions.length <= 50 ? 'grid-cols-10 lg:grid-cols-5' : 'grid-cols-10'
            }`}>
              {field.questions.map((_, index) => {
                const isAnswered = answers[index].selectedAnswer !== null;
                const isCurrent = currentQuestion === index;
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-full aspect-square rounded-md text-xs font-bold transition-all ${
                      isCurrent
                        ? `${accentClass.bg} text-white ring-2 ${accentClass.ring} ring-offset-1 ring-offset-gray-900 scale-110`
                        : isAnswered
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30'
                        : 'bg-gray-800 text-gray-500 hover:bg-gray-700'
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-800 space-y-2 text-xs text-gray-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-green-500/20 border border-green-500/30" />
                  Answered
                </div>
                <span className="text-green-400 font-bold">{answeredCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-gray-800" />
                  Unanswered
                </div>
                <span className="font-bold">{field.questions.length - answeredCount}</span>
              </div>
            </div>
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className={`w-full mt-4 py-2.5 bg-gradient-to-r ${accentClass.gradient} text-white rounded-xl text-sm font-semibold transition-all shadow-lg`}
            >
              Submit Exam
            </button>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 max-w-md w-full shadow-2xl animate-in">
            <div className="text-center">
              <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 ${accentClass.bgLight2}`}>
                <svg className={`w-7 h-7 ${accentClass.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Submit {isPractice ? 'Practice' : 'Exam'}?</h3>
              <p className="text-sm text-gray-400 mb-1">
                You've answered <span className="text-white font-semibold">{answeredCount}</span> out of <span className="text-white font-semibold">{field.questions.length}</span> questions.
              </p>
              {answeredCount < field.questions.length && (
                <p className="text-xs text-yellow-400 mb-4">
                  ⚠️ {field.questions.length - answeredCount} questions are unanswered and will be marked wrong.
                </p>
              )}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowConfirmSubmit(false)}
                  className="flex-1 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl text-sm font-medium transition-colors"
                >
                  Continue
                </button>
                <button
                  onClick={handleFinish}
                  className={`flex-1 py-2.5 bg-gradient-to-r ${accentClass.gradient} text-white rounded-xl text-sm font-semibold transition-all shadow-lg`}
                >
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quit Confirmation Modal */}
      {showQuitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-red-500/15 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Quit {isPractice ? 'Practice' : 'Exam'}?</h3>
              <p className="text-sm text-gray-400 mb-4">
                Your progress will be lost. Are you sure?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowQuitConfirm(false)}
                  className="flex-1 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl text-sm font-medium transition-colors"
                >
                  Stay
                </button>
                <button
                  onClick={onQuit}
                  className="flex-1 py-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl text-sm font-semibold transition-colors border border-red-500/30"
                >
                  Quit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
