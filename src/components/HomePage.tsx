import { ExamField } from '../types';
import { getFieldStats, getWrongAnswers, getAppStats } from '../utils/storage';

interface HomePageProps {
  fields: ExamField[];
  onStartExam: (field: ExamField) => void;
  onOpenFullTest: () => void;
  onOpenPracticeWrong: () => void;
}

export default function HomePage({ fields, onStartExam, onOpenFullTest, onOpenPracticeWrong }: HomePageProps) {
  const wrongAnswersCount = getWrongAnswers().length;
  const appStats = getAppStats();
  
  // Calculate overall stats
  const totalAttempts = Object.values(appStats.fieldStats).reduce(
    (sum, fs) => sum + fs.totalAttempts, 0
  );
  const avgHighestScore = Object.values(appStats.fieldStats).length > 0
    ? Math.round(
        Object.values(appStats.fieldStats).reduce((sum, fs) => sum + fs.highestScore, 0) /
        Object.values(appStats.fieldStats).length
      )
    : 0;

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-gray-950 to-purple-900/30" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              QAST IT Internship Prep
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Mock Exam Center
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-2">
              Prepare for your IT internship exam with 50 questions per field.
              Test your knowledge in programming, cloud, AI, and more.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                50 questions each
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Timed exam
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Detailed review
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats & Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Overall Stats */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-5">
            <h3 className="text-sm font-medium text-gray-400 mb-3">Your Progress</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-white">{totalAttempts}</p>
                <p className="text-xs text-gray-500">Total Attempts</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-400">{avgHighestScore}%</p>
                <p className="text-xs text-gray-500">Avg Best Score</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-400">{wrongAnswersCount}</p>
                <p className="text-xs text-gray-500">To Review</p>
              </div>
            </div>
          </div>

          {/* Full Test Card */}
          <button
            onClick={onOpenFullTest}
            className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-2xl p-5 text-left hover:border-indigo-500/50 transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🎯</span>
              <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">Full Test Mode</h3>
            </div>
            <p className="text-sm text-gray-400">
              Custom test with random questions from all fields. Choose time & count.
            </p>
            <div className="flex items-center text-indigo-400 text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
              Configure Test
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </button>

          {/* Practice Wrong Answers */}
          <button
            onClick={onOpenPracticeWrong}
            className={`rounded-2xl p-5 text-left transition-all group ${
              wrongAnswersCount > 0
                ? 'bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 hover:border-orange-500/50'
                : 'bg-gray-900/60 border border-gray-800 opacity-60 cursor-not-allowed'
            }`}
            disabled={wrongAnswersCount === 0}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🔄</span>
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                Practice Wrong Answers
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              {wrongAnswersCount > 0
                ? `Review and practice ${wrongAnswersCount} questions you got wrong.`
                : 'Complete some exams first to track wrong answers.'}
            </p>
            {wrongAnswersCount > 0 && (
              <div className="flex items-center text-orange-400 text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                Start Practice
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Priority Focus Fields */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex items-center gap-3 mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-300">🎯 Focus Areas</h2>
            <p className="text-sm text-gray-500 mt-0.5">Priority topics for the internship exam</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fields.slice(0, 5).map((field, index) => {
            const stats = getFieldStats(field.id);
            return (
              <button
                key={field.id}
                onClick={() => onStartExam(field)}
                style={{ animationDelay: `${index * 50}ms` }}
                className="group relative bg-gradient-to-br from-gray-900/90 to-gray-900/70 border-2 border-indigo-500/20 rounded-2xl p-6 text-left hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 animate-fade-in"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${field.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{field.icon}</span>
                    <div className="flex items-center gap-2">
                      {stats.highestScore > 0 && (
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          stats.highestScore >= 80
                            ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                            : stats.highestScore >= 60
                            ? 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30'
                            : 'bg-red-500/15 text-red-400 border border-red-500/30'
                        }`}>
                          Best: {stats.highestScore}%
                        </span>
                      )}
                      <span className="bg-indigo-500/15 text-indigo-300 text-xs px-2.5 py-1 rounded-full border border-indigo-500/30">
                        ⭐ Priority
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-indigo-200 transition-colors">
                    {field.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {field.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-indigo-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Start Exam
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    {stats.totalAttempts > 0 && (
                      <div className="flex items-center gap-2">
                        <div className="flex items-end gap-0.5 h-4">
                          {stats.scores.slice(-5).map((score, idx) => (
                            <div
                              key={idx}
                              className={`w-1.5 rounded-sm ${
                                score.percentage >= 80
                                  ? 'bg-green-500'
                                  : score.percentage >= 60
                                  ? 'bg-yellow-500'
                                  : 'bg-red-500'
                              }`}
                              style={{ height: `${Math.max(20, score.percentage)}%` }}
                              title={`${score.percentage}%`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">
                          {stats.totalAttempts} attempt{stats.totalAttempts > 1 ? 's' : ''}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Other Exam Fields */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-xl font-semibold text-gray-300 mb-6">💻 Additional Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fields.slice(5).map((field, index) => {
            const stats = getFieldStats(field.id);
            return (
              <button
                key={field.id}
                onClick={() => onStartExam(field)}
                style={{ animationDelay: `${index * 50}ms` }}
                className="group relative bg-gray-900/80 border border-gray-800 rounded-2xl p-6 text-left hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 animate-fade-in"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${field.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{field.icon}</span>
                    <div className="flex items-center gap-2">
                      {stats.highestScore > 0 && (
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          stats.highestScore >= 80
                            ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                            : stats.highestScore >= 60
                            ? 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30'
                            : 'bg-red-500/15 text-red-400 border border-red-500/30'
                        }`}>
                          Best: {stats.highestScore}%
                        </span>
                      )}
                      <span className="bg-gray-800 text-gray-400 text-xs px-2.5 py-1 rounded-full border border-gray-700">
                        50 Qs
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">
                    {field.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {field.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-indigo-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Start Exam
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    {stats.totalAttempts > 0 && (
                      <div className="flex items-center gap-2">
                        {/* Mini score history */}
                        <div className="flex items-end gap-0.5 h-4">
                          {stats.scores.slice(-5).map((score, idx) => (
                            <div
                              key={idx}
                              className={`w-1.5 rounded-sm ${
                                score.percentage >= 80
                                  ? 'bg-green-500'
                                  : score.percentage >= 60
                                  ? 'bg-yellow-500'
                                  : 'bg-red-500'
                              }`}
                              style={{ height: `${Math.max(20, score.percentage)}%` }}
                              title={`${score.percentage}%`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">
                          {stats.totalAttempts} attempt{stats.totalAttempts > 1 ? 's' : ''}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-gray-600">
          QAST IT Internship Mock Exam — Good luck on your exam! 🚀
        </div>
      </footer>
    </div>
  );
}
