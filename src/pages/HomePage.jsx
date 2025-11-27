import React from "react";
import { BookOpen } from "lucide-react";
import QuizCard from "../components/QuizCard";
import Mascot from "../components/Mascot";

const HomePage = ({ quizzes, onStartQuiz }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{
      background: 'linear-gradient(to bottom right, #bfdbfe, #dbeafe, #cffafe)'
    }}>
      <div className="w-full max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
            <BookOpen size={48} className="text-blue-600" />
          </div>
          <h1 className="text-6xl font-serif italic text-slate-700 mb-4">
            Quiz Master
          </h1>
          <p className="text-slate-600 text-lg">
            Choose your topic and test your knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(quizzes).map(([key, quiz]) => (
            <QuizCard
              key={key}
              quiz={quiz}
              onClick={() => onStartQuiz(key)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Mascot message="Ready to ace it? 🚀" emoji="🎯" position="center" />
        </div>
      </div>
    </div>
  );
};

export default HomePage