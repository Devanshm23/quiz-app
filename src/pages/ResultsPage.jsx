import React from "react";
import { Home } from "lucide-react";

const ResultsPage = ({ score, totalQuestions, onTryAgain, onGoHome }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{
      background: 'linear-gradient(to bottom right, #e0f2fe, #f0f9ff, #ffffff)'
    }}>
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-16 text-center relative overflow-hidden">
        <div className="absolute top-6 left-6 text-xs text-slate-400 font-medium">
          Keep Learning!
        </div>
        
        <button
          onClick={onGoHome}
          className="absolute top-6 right-6 p-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <Home size={20} className="text-slate-400" />
        </button>

        <div className="mb-8">
          <h1 className="text-4xl font-serif italic mb-8" style={{ color: '#1e5a7d' }}>
            Your Final score is
          </h1>
          <div className="relative inline-block">
            <div className="text-9xl font-bold mb-2" style={{ color: '#1e5a7d' }}>
              {percentage}
            </div>
            <span className="text-5xl font-light absolute" style={{ 
              color: '#1e5a7d',
              right: '-40px',
              top: '20px'
            }}>%</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={onTryAgain}
            className="px-8 py-3 text-sm font-medium rounded-lg transition-colors"
            style={{
              backgroundColor: '#bfdbfe',
              color: '#1e5a7d'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#93c5fd'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#bfdbfe'}
          >
            Try Again
          </button>
          <button
            onClick={onGoHome}
            className="px-8 py-3 text-sm font-medium rounded-lg transition-colors border-2"
            style={{
              borderColor: '#bfdbfe',
              color: '#1e5a7d'
            }}
          >
            Choose Another Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage