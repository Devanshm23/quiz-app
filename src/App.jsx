import React, { useState } from "react";

import quizData from "./assets/quizData";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/quizPage";
import ResultsPage from "./pages/ResultsPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedQuizType, setSelectedQuizType] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState({});

  // Start quiz
  const startQuiz = (quizType) => {
    setSelectedQuizType(quizType);
    setCurrentPage("quiz");
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers({});
  };

  const goHome = () => {
    setCurrentPage("home");
    setSelectedQuizType(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers({});
  };

  // ✔ UPDATED: Toggle selection/deselection
  const handleAnswerSelect = (option) => {
    // If user clicks the same option → deselect
    if (selectedAnswer === option) {
      const updated = { ...answers };
      delete updated[currentQuestion];

      setSelectedAnswer(null);
      setAnswers(updated);
      return;
    }

    // Otherwise select normally
    setSelectedAnswer(option);
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const handleNext = () => {
    const questions = quizData[selectedQuizType].questions;
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1] || null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
    }
  };

  // ✔ UPDATED: Submission allowed even if questions unanswered
  const handleSubmit = () => {
    setCurrentPage("results");
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers({});
    setCurrentPage("quiz");
  };

  const calculateScore = () => {
    let score = 0;
    const questions = quizData[selectedQuizType].questions;

    questions.forEach((q, idx) => {
      if (answers[idx] === q.correct) score++;
    });

    return score;
  };

  // Render pages
  if (currentPage === "home") {
    return <HomePage quizzes={quizData} onStartQuiz={startQuiz} />;
  }

  if (currentPage === "results") {
    return (
      <ResultsPage
        score={calculateScore()}
        totalQuestions={quizData[selectedQuizType].questions.length}
        onTryAgain={resetQuiz}
        onGoHome={goHome}
      />
    );
  }

  return (
    <QuizPage
      quiz={quizData[selectedQuizType]}
      currentQuestion={currentQuestion}
      selectedAnswer={selectedAnswer}
      answers={answers}
      onAnswerSelect={handleAnswerSelect}
      onNext={handleNext}
      onPrevious={handlePrevious}
      onSubmit={handleSubmit}
      onGoHome={goHome}
    />
  );
};

export default App;
