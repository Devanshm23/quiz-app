const Mascot = ({ message, emoji, position = 'bottom-left' }) => {
  const positionClasses = position === 'center' 
    ? 'inline-block relative' 
    : 'absolute bottom-8 left-8';

  return (
    <div className={positionClasses}>
      <div className="relative">
        <div className="bg-white rounded-2xl shadow-lg p-3 mb-2 border-2 border-slate-200">
          <p className="text-slate-700 font-medium text-sm whitespace-nowrap">
            {message}
          </p>
          <div className="absolute bottom-0 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
          <div className="absolute bottom-0 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-200 -mb-0.5"></div>
        </div>
        <div className="text-5xl">{emoji}</div>
      </div>
    </div>
  );
};

export default Mascot