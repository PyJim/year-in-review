import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categoryIcons, categoryDescriptions } from '../data/categories';

interface Props {
  category: string;
  onContinue: () => void;
}

export default function CategoryIntro({ category, onContinue }: Props) {
  // Get the icon component for the current category, fallback to Star if not found
  const Icon = categoryIcons[category] || categoryIcons.general;
  const description = categoryDescriptions[category] || "Reflect on your experiences from this year.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-12 max-w-2xl w-full text-center">
        <div className="mb-8">
          <Icon className="w-16 h-16 mx-auto text-gray-900 mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4 capitalize">
            {category}
          </h2>
          <p className="text-xl text-gray-600">
            {description}
          </p>
        </div>
        
        <button
          onClick={onContinue}
          className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors group"
        >
          Begin {category} Questions
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}