const QuizCard = ({ quiz, onClick }) => {
  const Icon = quiz.icon;
  
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
    >
      <div 
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
        style={{
          background: `linear-gradient(to bottom right, ${quiz.gradientFrom}, ${quiz.gradientTo})`
        }}
      >
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">
        {quiz.title}
      </h3>
      <p className="text-slate-500 text-sm mb-4">
        {quiz.questions.length} Questions
      </p>
      <div 
        className="inline-block px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors" 
        style={{ backgroundColor: quiz.color }}
      >
        Start Quiz
      </div>
    </button>
  );
};

export default QuizCard