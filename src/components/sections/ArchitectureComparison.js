// src/components/sections/ArchitectureComparison.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const architectureData = [
  {
    name: "RNN",
    parallelization: 20,
    contextLength: 30,
    trainingSpeed: 25,
    accuracy: 70
  },
  {
    name: "LSTM",
    parallelization: 25,
    contextLength: 45,
    trainingSpeed: 35,
    accuracy: 80
  },
  {
    name: "Transformer",
    parallelization: 90,
    contextLength: 95,
    trainingSpeed: 85,
    accuracy: 95
  }
];

const ArchitectureComparison = () => {
  return (
    <div className="space-y-6">
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={architectureData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="parallelization" fill="#8884d8" name="Parallelization" />
            <Bar dataKey="contextLength" fill="#82ca9d" name="Context Length" />
            <Bar dataKey="trainingSpeed" fill="#ffc658" name="Training Speed" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {architectureData.map((arch, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">{arch.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Parallelization:</span>
                <span className="font-semibold">{arch.parallelization}%</span>
              </div>
              <div className="flex justify-between">
                <span>Context Length:</span>
                <span className="font-semibold">{arch.contextLength}%</span>
              </div>
              <div className="flex justify-between">
                <span>Training Speed:</span>
                <span className="font-semibold">{arch.trainingSpeed}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ArchitectureComparison };