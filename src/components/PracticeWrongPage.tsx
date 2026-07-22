import { useState } from 'react';
import { getWrongAnswers, clearWrongAnswers, removeWrongAnswer } from '../utils/storage';
import { examFields } from '../data';

interface PracticeWrongPageProps {
  onStartPractice: () => void;
  onBack: () => void;
}

export default function PracticeWrongPage({ onStartPractice, onBack }: PracticeWrongPageProps) {
  const [wrongAnswers, setWrongAnswers] = useState(getWrongAnswers());
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Group by field
  const groupedByField = wrongAnswers.reduce((acc, wa) => {
    const fieldId = wa.fieldId.replace('fulltest-', '').replace('practice-', '').split('-')[0];
    if (!acc[fieldId]) {
      acc[fieldId] = [];
    }
    acc[fieldId].push(wa);
    return acc;
  }, {} as Record<string, typeof wrongAnswers>);

  const handleClearAll = () => {
    clearWrongAnswers();
    setWrongAnswers([]);
    setShowClearConfirm(false);
  };

  const handleRemoveOne = (questionId: string) => {
    removeWrongAnswer(questionId);
    setWrongAnswers(getWrongAnswers());
  };

  const getFieldInfo = (fieldId: string) => {
    const field = examFields.find(f => f.id === fieldId);
    return field || { name: fieldId, icon: '❓', color: 'from-gray-500 to-gray-600' };
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Header */}
      <div className="bg-gray-900/95 border-b border-gray-800 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <h1 className="text-lg font-semibold text-white">Practice Wrong Answers</h1>
          <div className="w-16" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        {wrongAnswers.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">🎉</span>
            <h2 className="text-2xl font-bold text-white mb-2">No Wrong Answers!</h2>
            <p className="text-gray-400 mb-6">
              Great job! You don't have any wrong answers to practice.
              Complete some exams to track your mistakes.
            </p>
            <button
              onClick={onBack}
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium transition-colors"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <>
            {/* Header Card */}
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-2xl p-6 mb-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="text-center sm:text-left flex-1">
                  <span className="text-4xl mb-2 block sm:inline">🔄</span>
                  <h2 className="text-2xl font-bold text-white mb-1">Practice Mode</h2>
                  <p className="text-gray-400">
                    You have <span className="text-orange-400 font-bold">{wrongAnswers.length}</span> questions to review
                  </p>
                </div>
                <button
                  onClick={onStartPractice}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl text-lg font-bold transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
                >
                  Start Practice
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Grouped Questions */}
            <div className="space-y-6">
              {Object.entries(groupedByField).map(([fieldId, questions]) => {
                const fieldInfo = getFieldInfo(fieldId);
                return (
                  <div key={fieldId} className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden">
                    <div className={`bg-gradient-to-r ${fieldInfo.color} px-5 py-3 flex items-center gap-3`}>
                      <span className="text-xl">{fieldInfo.icon}</span>
                      <h3 className="font-semibold text-white">{fieldInfo.name}</h3>
                      <span className="ml-auto bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                        {questions.length} question{questions.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="divide-y divide-gray-800">
                      {questions.map((wa) => (
                        <div key={wa.questionId} className="p-4 flex items-start gap-3">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-white leading-relaxed line-clamp-2">
                              {wa.question.question}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Added: {new Date(wa.date).toLocaleDateString()}
                            </p>
                          </div>
                          <button
                            onClick={() => handleRemoveOne(wa.questionId)}
                            className="flex-shrink-0 text-gray-500 hover:text-red-400 transition-colors p-1"
                            title="Remove from practice list"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clear All Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowClearConfirm(true)}
                className="text-sm text-gray-500 hover:text-red-400 transition-colors"
              >
                Clear all wrong answers
              </button>
            </div>
          </>
        )}
      </div>

      {/* Clear Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-red-500/15 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Clear All Wrong Answers?</h3>
              <p className="text-sm text-gray-400 mb-4">
                This will remove all {wrongAnswers.length} questions from your practice list. This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="flex-1 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleClearAll}
                  className="flex-1 py-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl text-sm font-semibold transition-colors border border-red-500/30"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
