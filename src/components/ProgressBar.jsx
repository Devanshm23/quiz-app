const ProgressBar = ({ current, total, color }) => {
  return (
    <div className="mb-8">
      <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
        <div 
          className="h-full transition-all duration-300"
          style={{ 
            width: `${((current + 1) / total) * 100}%`,
            backgroundColor: color
          }}
        />
      </div>
      <p className="text-sm text-slate-500 mt-2 text-center">
        Question {current + 1} of {total}
      </p>
    </div>
  );
};

export default ProgressBar