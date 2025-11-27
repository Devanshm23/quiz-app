import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Navigation = ({
  currentQuestion,
  isLastQuestion,
  onPrevious,
  onNext,
  onSubmit,
  color
}) => {
  return (
    <div className="flex justify-center gap-4">
      
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentQuestion === 0}
        className={`p-3 rounded-full transition-all ${
          currentQuestion === 0
            ? "bg-slate-100 text-slate-300 cursor-not-allowed"
            : "bg-slate-200 text-slate-600 hover:bg-slate-300"
        }`}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next / Submit */}
      {isLastQuestion ? (
        <button
          onClick={onSubmit}
          className="px-6 py-3 rounded-xl font-medium text-white transition-all"
          style={{ backgroundColor: color }}
        >
          Submit Quiz
        </button>
      ) : (
        <button
          onClick={onNext}
          className="p-3 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      )}

    </div>
  );
};

export default Navigation;
