import React, { useState, useEffect } from 'react';
import { Question, Answer } from '../types';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { categoryIcons } from '../data/categories';

interface Props {
  question: Question;
  onAnswer: (answer: Answer) => void;
  onNext: () => void;
  onPrevious: () => void;
  currentAnswer?: string;
  totalQuestions: number;
  currentNumber: number;
}

export default function QuestionCard({
  question,
  onAnswer,
  onNext,
  onPrevious,
  currentAnswer = '',
  totalQuestions,
  currentNumber,
}: Props) {
  const [answer, setAnswer] = useState(currentAnswer);
  const Icon = categoryIcons[question.category];

  // Reset `answer` when the question changes
  useEffect(() => {
    setAnswer(currentAnswer);
  }, [currentAnswer, question.id]);

  const handleSubmit = () => {
    if (answer.trim()) {
      onAnswer({ questionId: question.id, answer });
      onNext();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="flex items-center space-x-3 text-gray-900 mb-6">
          <Icon className="w-6 h-6" />
          <span className="text-sm font-medium capitalize">{question.category}</span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">{question.text}</h2>

        {question.type === 'multiple' && (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <label
                key={option}
                className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={answer === option}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-4 h-4 text-gray-900 accent-gray-900"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        )}

        {question.type === 'short' && (
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            placeholder="Your answer..."
          />
        )}

        {question.type === 'long' && (
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            rows={6}
            placeholder="Your answer..."
          />
        )}

        <div className="pt-6 space-y-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gray-900 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(currentNumber / totalQuestions) * 100}%`,
              }}
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={onPrevious}
              className="flex items-center px-6 py-2 text-gray-600 hover:text-gray-800"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </button>
            <span className="text-sm text-gray-500">
              Question {currentNumber} of {totalQuestions}
            </span>
            <button
              onClick={handleSubmit}
              className="flex items-center px-6 py-2 bg-gradient-to-br from-gray-900 to-black text-white rounded-lg hover:bg-gray-700"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
