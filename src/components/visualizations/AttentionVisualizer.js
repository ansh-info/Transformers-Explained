import React, { useState, useEffect } from 'react';

const AttentionVisualizer = () => {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const sentence = "The cat sat on the mat";
  const words = sentence.split(' ');

  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <div className="space-y-6">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-bold mb-4">Live Attention Visualization</h3>
        <div className="flex flex-wrap gap-2">
          {words.map((word, idx) => (
            <div
              key={idx}
              className="relative p-2 border rounded transition-all duration-300"
              style={{
                backgroundColor: `rgba(59, 130, 246, ${idx === highlightIndex ? 0.8 : 0.2})`,
                transform: `scale(${idx === highlightIndex ? 1.1 : 1})`,
                color: idx === highlightIndex ? 'white' : 'black'
              }}
            >
              {word}
              <div className="text-xs mt-1 text-center">
                {(idx === highlightIndex ? '80%' : '20%')}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Query (Q)</h3>
          <p>Current word being processed</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Key (K)</h3>
          <p>All words in the sequence</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Value (V)</h3>
          <p>Information to extract</p>
        </div>
      </div>
    </div>
  );
};

export { AttentionVisualizer };