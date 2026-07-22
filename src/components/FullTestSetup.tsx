import { useState } from 'react';
import { FullTestConfig } from '../types';
import { getFieldStats } from '../utils/storage';

interface FullTestSetupProps {
  onStart: (config: FullTestConfig) => void;
  onBack: () => void;
}

const QUESTION_OPTIONS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const TIME_OPTIONS = [
  { value: 10, label: '10 min' },
  { value: 15, label: '15 min' },
  { value: 20, label: '20 min' },
  { value: 30, label: '30 min' },
  { value: 45, label: '45 min' },
  { value: 60, label: '60 min' },
  { value: 90, label: '90 min' },
  { value: 120, label: '120 min' },
];

export default function FullTestSetup({ onStart, onBack }: FullTestSetupProps) {
  const [questionCount, setQuestionCount] = useState(30);
  const [timeMinutes, setTimeMinutes] = useState(30);

  const fullTestStats = getFieldStats('fulltest');

  const handleStart = () => {
    onStart({ questionCount, timeMinutes });
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Header */}
      <div className="bg-gray-900/95 border-b border-gray-800 py-4 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <h1 className="text-lg font-semibold text-white flex items-center gap-2">
            <span>🎯</span> Full Test Setup
          </h1>
          <div className="w-16" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <div className="text-center mb-10">
          <span className="text-5xl mb-4 block">🎯</span>
          <h2 className="text-3xl font-bold text-white mb-2">Configure Your Full Test</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Random questions from all 9 fields. Customize your test settings below.
          </p>
        </div>

        {/* Stats Card */}
        {fullTestStats.totalAttempts > 0 && (
          <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-2xl p-5 mb-8">
            <h3 className="text-sm font-medium text-indigo-300 mb-3">📊 Your Full Test Stats</h3>
            <div className="flex items-center justify-around">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">{fullTestStats.totalAttempts}</p>
                <p className="text-xs text-gray-400">Attempts</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-400">{fullTestStats.highestScore}%</p>
                <p className="text-xs text-gray-400">Best Score</p>
              </div>
            </div>
          </div>
        )}

        {/* Question Count */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
            <span className="text-indigo-400">①</span> Number of Questions
          </label>
          <div className="grid grid-cols-5 gap-2">
            {QUESTION_OPTIONS.map((count) => (
              <button
                key={count}
                onClick={() => setQuestionCount(count)}
                className={`py-3 rounded-xl text-sm font-bold transition-all ${
                  questionCount === count
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25 scale-105'
                    : 'bg-gray-800/60 text-gray-400 hover:bg-gray-700 border border-gray-700 hover:border-gray-600'
                }`}
              >
                {count}
              </button>
            ))}
          </div>
        </div>

        {/* Time */}
        <div className="mb-10">
          <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
            <span className="text-indigo-400">②</span> Time Limit
          </label>
          <div className="grid grid-cols-4 gap-2">
            {TIME_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => setTimeMinutes(option.value)}
                className={`py-3 rounded-xl text-sm font-bold transition-all ${
                  timeMinutes === option.value
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25 scale-105'
                    : 'bg-gray-800/60 text-gray-400 hover:bg-gray-700 border border-gray-700 hover:border-gray-600'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-6 mb-8">
          <h3 className="text-sm font-medium text-indigo-300 mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Test Summary
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-black/20 rounded-xl p-4">
              <p className="text-4xl font-bold text-white">{questionCount}</p>
              <p className="text-sm text-gray-400">Questions</p>
            </div>
            <div className="bg-black/20 rounded-xl p-4">
              <p className="text-4xl font-bold text-white">{timeMinutes}</p>
              <p className="text-sm text-gray-400">Minutes</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-indigo-500/20 text-center">
            <p className="text-sm text-gray-400">
              ~<span className="text-white font-semibold">{Math.round((timeMinutes * 60) / questionCount)}</span> seconds per question
            </p>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={handleStart}
          className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl text-lg font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 hover:scale-[1.02]"
        >
          Start Full Test
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <p className="text-center text-xs text-gray-600 mt-4">
          Questions will be randomly selected from all 9 fields with randomized answer positions.
        </p>
      </div>
    </div>
  );
}
