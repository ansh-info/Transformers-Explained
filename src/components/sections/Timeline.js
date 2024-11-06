// src/components/sections/Timeline.js
import React from 'react';
import { Code, Brain, Zap, MessageSquare } from 'lucide-react';

const timelineData = [
  {
    year: 2014,
    title: "Sequence-to-Sequence Models",
    description: "RNNs with attention for machine translation",
    icon: <Code className="w-6 h-6" />,
    problem: "Limited context window, sequential processing"
  },
  {
    year: 2015,
    title: "Neural Machine Translation",
    description: "Attention mechanisms become prominent",
    icon: <Brain className="w-6 h-6" />,
    problem: "Still sequential, slow training"
  },
  {
    year: 2017,
    title: "Transformer Architecture",
    description: "Attention is All You Need paper",
    icon: <Zap className="w-6 h-6" />,
    solution: "Parallel processing, unlimited context"
  },
  {
    year: 2018,
    title: "BERT & GPT",
    description: "Pre-trained language models",
    icon: <MessageSquare className="w-6 h-6" />,
    impact: "Revolutionary NLP capabilities"
  }
];

const Timeline = () => {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
      <div className="space-y-8 ml-12">
        {timelineData.map((item, index) => (
          <div key={index} className="relative group">
            <div className="absolute -left-12 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              {item.icon}
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <span className="text-blue-500 font-semibold">{item.year}</span>
              </div>
              <p className="text-gray-600">{item.description}</p>
              {item.problem && (
                <div className="mt-2 text-red-500 text-sm">
                  Problem: {item.problem}
                </div>
              )}
              {item.solution && (
                <div className="mt-2 text-green-500 text-sm">
                  Solution: {item.solution}
                </div>
              )}
              {item.impact && (
                <div className="mt-2 text-blue-500 text-sm">
                  Impact: {item.impact}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Timeline };