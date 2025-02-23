/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client"; // Ensure createRoot is properly imported


const PollWidget = ({ pollId, question, options }) => {
    const storageKey = `poll_${pollId}_votes`;
  const [votes, setVotes] = useState(() => {
    return JSON.parse(localStorage.getItem(storageKey)) || Array(options.length).fill(0);
  });
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(votes));
  }, [votes]);

  const totalVotes = votes.reduce((sum, count) => sum + count, 0);

  const handleVote = (index) => {
    if (!voted) {
      const newVotes = [...votes];
      newVotes[index] += 1;
      setVotes(newVotes);
      setVoted(true);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-500 to-indigo-900 shadow-2xl rounded-2xl max-w-lg mx-auto text-center text-white animate-fade-in relative overflow-hidden border-4 border-transparent">
      <div className="absolute inset-0 border-4 border-red-500 rounded-2xl animate-border-run"></div>
      <h3 className="text-3xl font-extrabold mb-6 break-words drop-shadow-lg tracking-wide animate-pulse relative">
        {question}
      </h3>
      <div className="flex flex-wrap justify-center gap-6 relative">
        {options.map((option, index) => {
          const percentage = totalVotes > 0 ? (votes[index] / totalVotes) * 100 : 0;
          const radius = 50;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = voted ? circumference - (percentage / 100) * circumference : circumference;

          return (
            <div 
              key={index} 
              className="relative w-40 h-40 flex flex-col items-center cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out"
              onClick={() => handleVote(index)}
            >
              <svg className="w-full h-full drop-shadow-lg" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#ddd"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke={voted ? "url(#redGradient)" : "#888"}
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                  className="transition-all duration-700 ease-out animate-draw"
                />
                <defs>
                  <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF8500" />
                    <stop offset="50%" stopColor="#FF4500" />
                    <stop offset="100%" stopColor="#FF0000" />
                  </linearGradient>
                </defs>
                {voted && (
                  <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="30" fontWeight="bold" fill="url(#redGradient)" className="drop-shadow-lg">
                    {Math.round(percentage)}%
                  </text>
                )}
              </svg>
              <p className="mt-3 text-md font-semibold break-words text-center w-36 bg-white text-gray-900 px-2 py-1 rounded-lg shadow-md transform transition-all duration-300 hover:bg-gray-200">
                {option}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};


window.PollWidget = {
    render: ({ elementId, pollId, question, options }) => {
      const container = document.getElementById(elementId);
      if (container) {
        const root = ReactDOM.createRoot(container); // ✅ Ensure createRoot is used correctly
        root.render(<PollWidget pollId={pollId} question={question} options={options} />);
      }
    }
  };


export default PollWidget;
