import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  onStart: () => void;
}

export default function WelcomePage({ onStart }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-40 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -top-40 -right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          
          {/* Content */}
          <div className="relative">
            <h1 className="text-7xl font-bold text-white mb-8 tracking-tight">
              Your Year in Review
            </h1>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Take a moment to reflect on your journey through {new Date().getFullYear()}. 
              Celebrate your victories, learn from your challenges, and set your intentions 
              for the year ahead.
            </p>
            <button
              onClick={onStart}
              className="inline-flex items-center px-12 py-6 text-xl font-medium text-gray-900 bg-white rounded-2xl hover:bg-blue-50 transition-colors group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
            >
              Begin Your Journey
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}