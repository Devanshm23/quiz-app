import React from "react";
import { Home } from "lucide-react";

import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import OptionButton from "../components/OptionButton";
import Navigation from "../components/Navigation";
import Mascot from "../components/Mascot";


const QuizPage = ({
  quiz,
  currentQuestion,
  selectedAnswer,
  answers,
  onAnswerSelect,
  onNext,
  onPrevious,
  onSubmit,
  onGoHome
}) => {
  const questions = quiz.questions;
  const isLastQuestion = currentQuestion === questions.length - 1;
  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{
      background: 'linear-gradient(to bottom right, #bfdbfe, #dbeafe, #cffafe)'
    }}>
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-12 relative">
        <button
          onClick={onGoHome}
          className="absolute top-6 right-6 p-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <Home size={20} className="text-slate-400" />
        </button>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif italic text-slate-700 mb-2">
            {quiz.title}
          </h1>
          <p className="text-slate-500 text-sm">Test your knowledge</p>
        </div>

        <ProgressBar
          current={currentQuestion}
          total={questions.length}
          color={quiz.color}
        />

        <QuestionCard
          questionNumber={currentQuestion + 1}
          question={questions[currentQuestion].question}
        />

        <div className="space-y-4 mb-8">
          {questions[currentQuestion].options.map((option, index) => (
            <OptionButton
              key={index}
              option={option}
              isSelected={selectedAnswer === option}
              onClick={() => onAnswerSelect(option)}
              color={quiz.color}
            />
          ))}
        </div>

        <Navigation
          currentQuestion={currentQuestion}
          isLastQuestion={isLastQuestion}
          allAnswered={allAnswered}
          onPrevious={onPrevious}
          onNext={onNext}
          onSubmit={onSubmit}
          color={quiz.color}
        />

        <Mascot message="You got this! 💪" emoji="🎓" position="bottom-left" />
      </div>
    </div>
  );
};

export default QuizPage