const OptionButton = ({ option, isSelected, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-xl text-slate-700 font-medium transition-all duration-200 ${
        isSelected
          ? 'border-2'
          : 'bg-slate-50 border-2 border-slate-200 hover:border-slate-300'
      }`}
      style={isSelected ? {
        backgroundColor: color + '20',
        borderColor: color
      } : {}}
    >
      {option}
    </button>
  );
};

export default OptionButton