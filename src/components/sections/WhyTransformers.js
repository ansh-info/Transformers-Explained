// src/components/sections/WhyTransformers.js
import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  GitBranch, 
  Timer, 
  Zap, 
  Cpu, 
  Database,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const reasons = [
  {
    title: "Parallel Processing",
    icon: <Maximize2 className="w-8 h-8" />,
    description: "Process entire sequences simultaneously instead of one token at a time",
    benefit: "Faster training and inference",
    details: [
      "Enables efficient GPU utilization",
      "Reduces training time significantly",
      "Allows processing of multiple sequence elements in parallel"
    ]
  },
  {
    title: "Self-Attention Mechanism",
    icon: <GitBranch className="w-8 h-8" />,
    description: "Capture relationships between distant parts of the input",
    benefit: "Better understanding of context",
    details: [
      "Dynamic weight computation for context",
      "Handles long-range dependencies effectively",
      "Better preservation of contextual information"
    ]
  },
  {
    title: "No Vanishing Gradients",
    icon: <Timer className="w-8 h-8" />,
    description: "Direct connections through attention mechanism",
    benefit: "More stable training",
    details: [
      "Consistent gradient propagation",
      "Better learning of long-term dependencies",
      "More stable optimization process"
    ]
  },
  {
    title: "Scalability",
    icon: <Zap className="w-8 h-8" />,
    description: "Architecture scales well with more compute and data",
    benefit: "Enables powerful models",
    details: [
      "Linear scaling with sequence length",
      "Efficient multi-head attention",
      "Easy to distribute across GPUs"
    ]
  }
];

const disadvantages = [
  {
    title: "Computational Complexity",
    icon: <Cpu className="w-8 h-8" />,
    description: "O(n²) complexity in sequence length for self-attention",
    impact: "Resource intensive for long sequences",
    details: [
      "High memory requirements",
      "Quadratic computational cost",
      "Energy intensive training"
    ]
  },
  {
    title: "Data Requirements",
    icon: <Database className="w-8 h-8" />,
    description: "Needs large amounts of training data",
    impact: "Not suitable for small datasets",
    details: [
      "Requires extensive pretraining",
      "Poor performance on limited data",
      "High data collection costs"
    ]
  },
  {
    title: "Position Encoding",
    icon: <AlertTriangle className="w-8 h-8" />,
    description: "Requires artificial position information",
    impact: "May not capture sequence order naturally",
    details: [
      "Positional encoding limitations",
      "Maximum sequence length constraints",
      "Position representation challenges"
    ]
  }
];

const WhyTransformers = () => {
  const [activeReason, setActiveReason] = useState(0);
  const [activeDisadvantage, setActiveDisadvantage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReason((prev) => (prev + 1) % reasons.length);
      setActiveDisadvantage((prev) => (prev + 1) % disadvantages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Advantages of Transformers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg transition-all duration-500 ${
                index === activeReason
                  ? 'bg-blue-500 text-white scale-105'
                  : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                {reason.icon}
                <h3 className="font-bold">{reason.title}</h3>
              </div>
              <p className="text-sm mb-2">{reason.description}</p>
              <div className="text-sm font-semibold">
                Benefit: {reason.benefit}
              </div>
              <ul className="text-sm mt-2 space-y-1">
                {reason.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-red-700">Disadvantages and Limitations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {disadvantages.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg transition-all duration-500 ${
                index === activeDisadvantage
                  ? 'bg-red-500 text-white scale-105'
                  : 'bg-red-50'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                {item.icon}
                <h3 className="font-bold">{item.title}</h3>
              </div>
              <p className="text-sm mb-2">{item.description}</p>
              <div className="text-sm font-semibold">
                Impact: {item.impact}
              </div>
              <ul className="text-sm mt-2 space-y-1">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="font-bold text-red-700 mb-2">RNN Problems</h4>
          <ul className="list-disc pl-4 space-y-2 text-red-700">
            <li>Sequential processing limits parallelization</li>
            <li>Vanishing gradient problems</li>
            <li>Limited context window</li>
            <li>Poor long-range dependency handling</li>
            <li>Sequential nature slows processing</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-bold text-green-700 mb-2">Transformer Solutions</h4>
          <ul className="list-disc pl-4 space-y-2 text-green-700">
            <li>Parallel processing of entire sequence</li>
            <li>Direct connections through attention</li>
            <li>Theoretically unlimited context window</li>
            <li>Superior feature extraction via self-attention</li>
            <li>Efficient multi-head attention mechanism</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { WhyTransformers };