const QuestionCard = ({ questionNumber, question }) => {
  return (
    <div className="bg-blue-100 rounded-2xl p-6 mb-6">
      <p className="text-slate-800 font-medium text-center text-lg">
        {questionNumber}. {question}
      </p>
    </div>
  );
};

export default QuestionCard