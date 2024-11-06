import React from 'react';
import { ArrowUp } from 'lucide-react';

const ArchitectureAnimation = () => {
  return (
    <div className="relative h-[800px] bg-white rounded-lg p-8">
      <div className="absolute inset-0 flex flex-col items-center">
        {/* Output Probabilities */}
        <div className="text-center mb-4">
          <div className="font-bold mb-2">Output Probabilities</div>
          <ArrowUp className="w-6 h-6 mx-auto text-gray-600" />
        </div>

        {/* Top layers */}
        <div className="bg-green-100 px-4 py-2 rounded-lg mb-2 w-40 text-center">Softmax</div>
        <ArrowUp className="w-6 h-6 text-gray-600 mb-2" />
        <div className="bg-purple-100 px-4 py-2 rounded-lg mb-2 w-40 text-center">Linear</div>

        {/* Main architecture blocks */}
        <div className="flex space-x-16">
          {/* Encoder Stack */}
          <div className="relative w-64">
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              <div className="space-y-3">
                {/* Repeat block - can be made into a component */}
                <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="bg-yellow-100 px-4 py-2 rounded-lg mb-2">Add & Norm</div>
                  <div className="bg-blue-100 px-4 py-2 rounded-lg mb-2">Feed Forward</div>
                  <div className="bg-yellow-100 px-4 py-2 rounded-lg mb-2">Add & Norm</div>
                  <div className="bg-orange-100 px-4 py-2 rounded-lg">Multi-Head Attention</div>
                </div>
              </div>
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 rotate-90">
                Nx
              </div>
            </div>

            {/* Positional Encoding */}
            <div className="mt-4 flex items-center justify-center space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <span className="text-xl">∿</span>
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                +
              </div>
            </div>

            {/* Input Embedding */}
            <div className="mt-4">
              <div className="bg-pink-100 px-4 py-2 rounded-lg text-center">Input Embedding</div>
              <div className="text-center mt-4">Inputs</div>
            </div>
          </div>

          {/* Decoder Stack */}
          <div className="relative w-64">
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              <div className="space-y-3">
                <div className="bg-yellow-100 px-4 py-2 rounded-lg mb-2">Add & Norm</div>
                <div className="bg-blue-100 px-4 py-2 rounded-lg mb-2">Feed Forward</div>
                <div className="bg-yellow-100 px-4 py-2 rounded-lg mb-2">Add & Norm</div>
                <div className="bg-orange-100 px-4 py-2 rounded-lg mb-2">Multi-Head Attention</div>
                <div className="bg-yellow-100 px-4 py-2 rounded-lg mb-2">Add & Norm</div>
                <div className="bg-orange-100 px-4 py-2 rounded-lg">Masked Multi-Head Attention</div>
              </div>
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 rotate-90">
                Nx
              </div>
            </div>

            {/* Positional Encoding */}
            <div className="mt-4 flex items-center justify-center space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <span className="text-xl">∿</span>
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                +
              </div>
            </div>

            {/* Output Embedding */}
            <div className="mt-4">
              <div className="bg-pink-100 px-4 py-2 rounded-lg text-center">Output Embedding</div>
              <div className="text-center mt-4">Outputs (shifted right)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ArchitectureAnimation };