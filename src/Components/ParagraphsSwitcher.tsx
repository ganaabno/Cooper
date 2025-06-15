import React, { useState } from "react";

const quotes = [
  {
    text: "Claritas est etiam processus dynamics, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica.",
    author: "David Ramon",
    position: "Project Manager, D360-Studio",
  },
  {
    text: "Claritas est etiam processus dynamics, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica.",
    author: "David Ramon",
    position: "Project Manager, D360-Studio",
  },
  {
    text: "Claritas est etiam processus dynamics, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica.",
    author: "David Ramon",
    position: "Project Manager, D360-Studio",
  },
];

const QuoteSwitcher: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwitch = (dir: "prev" | "next") => {
    if (isAnimating) return; // Prevent spamming buttons

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500); // Match duration of animation

    setCurrentIndex((prevIndex) => {
      if (dir === "next") {
        return (prevIndex + 1) % quotes.length;
      } else {
        return (prevIndex - 1 + quotes.length) % quotes.length;
      }
    });
  };

  return (
    <div className="relative w-full h-48 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-start h-full transition-transform duration-500"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {quotes.map((quote, index) => (
          <div key={index} className="flex-none w-full h-full px-4 flex flex-col justify-center items-center">
            <p className="italic text-gray-700 text-center mb-4">"{quote.text}"</p>
            <div className="text-center text-gray-600">
              <span className="block font-medium">{quote.author}</span>
              <span className="text-sm">{quote.position}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => handleSwitch("prev")}
        className="absolute left-96 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition"
      >
        &#10094;
      </button>

      <button
        onClick={() => handleSwitch("next")}
        className="absolute left-auto right-96 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition"
      >
        &#10095;
      </button>
    </div>
  );
};

export default QuoteSwitcher;
