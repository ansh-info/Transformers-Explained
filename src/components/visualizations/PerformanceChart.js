import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const performanceData = [
  {
    name: 'LSTM',
    accuracy: 75.2,
    trainingTime: 120,
    memory: 8,
    bleuScore: 28.4,
    glueScore: 75.2,
    inference: 100,
    contextHandling: 70,
    scalability: 60
  },
  {
    name: 'BiLSTM',
    accuracy: 78.6,
    trainingTime: 144,
    memory: 10,
    bleuScore: 31.2,
    glueScore: 78.6,
    inference: 110,
    contextHandling: 75,
    scalability: 65
  },
  {
    name: 'CNN',
    accuracy: 76.8,
    trainingTime: 96,
    memory: 6,
    bleuScore: 29.7,
    glueScore: 76.8,
    inference: 70,
    contextHandling: 50,
    scalability: 70
  },
  {
    name: 'Transformer',
    accuracy: 89.3,
    trainingTime: 48,
    memory: 16,
    bleuScore: 34.5,
    glueScore: 89.3,
    inference: 60,
    contextHandling: 90,
    scalability: 90
  }
];

const PerformanceChart = () => {
  return (
    <div className="space-y-6">
      <div className="h-96">
        <ResponsiveContainer>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              formatter={(value, name) => {
                switch(name) {
                  case 'accuracy':
                  case 'glueScore':
                  case 'scalability':
                  case 'contextHandling':
                    return [`${value}%`, name];
                  case 'trainingTime':
                    return [`${value}h`, 'Training Time'];
                  case 'memory':
                    return [`${value}GB`, 'Memory Usage'];
                  case 'bleuScore':
                    return [`${value}`, 'BLEU Score'];
                  case 'inference':
                    return [`${value}ms`, 'Inference Time'];
                  default:
                    return [value, name];
                }
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="accuracy" stroke="#8884d8" name="Accuracy" />
            <Line type="monotone" dataKey="trainingTime" stroke="#82ca9d" name="Training Time" />
            <Line type="monotone" dataKey="memory" stroke="#ffc658" name="Memory Usage" />
            <Line type="monotone" dataKey="bleuScore" stroke="#ff8042" name="BLEU Score" />
            <Line type="monotone" dataKey="contextHandling" stroke="#0088fe" name="Context Handling" />
            <Line type="monotone" dataKey="scalability" stroke="#00C49F" name="Scalability" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {performanceData.map((model, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="font-bold mb-3 text-lg">{model.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Accuracy:</span>
                <span className="font-semibold">{model.accuracy}%</span>
              </div>
              <div className="flex justify-between">
                <span>Training Time:</span>
                <span className="font-semibold">{model.trainingTime}h</span>
              </div>
              <div className="flex justify-between">
                <span>Memory:</span>
                <span className="font-semibold">{model.memory}GB</span>
              </div>
              <div className="flex justify-between">
                <span>BLEU Score:</span>
                <span className="font-semibold">{model.bleuScore}</span>
              </div>
              <div className="flex justify-between">
                <span>GLUE Score:</span>
                <span className="font-semibold">{model.glueScore}</span>
              </div>
              <div className="flex justify-between">
                <span>Inference:</span>
                <span className="font-semibold">{model.inference}ms</span>
              </div>
              <div className="flex justify-between">
                <span>Context Handling:</span>
                <span className="font-semibold">{model.contextHandling}%</span>
              </div>
              <div className="flex justify-between">
                <span>Scalability:</span>
                <span className="font-semibold">{model.scalability}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { PerformanceChart };