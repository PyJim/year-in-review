import React from 'react';
import { Calendar, Star, LineChart, Target, Heart, Book } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="w-8 h-8 text-blue-500" />,
    title: "Reflect",
    description: "Journey through your year's most meaningful moments",
    image: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?auto=format&fit=crop&q=80"
  },
  {
    icon: <Star className="w-8 h-8 text-purple-500" />,
    title: "Discover",
    description: "Gain insights about your growth and achievements",
    image: "https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?auto=format&fit=crop&q=80"
  },
  {
    icon: <LineChart className="w-8 h-8 text-green-500" />,
    title: "Plan Ahead",
    description: "Set your direction for the upcoming year",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
  },
  {
    icon: <Target className="w-8 h-8 text-red-500" />,
    title: "Set Goals",
    description: "Define clear objectives for your future",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80"
  },
  {
    icon: <Heart className="w-8 h-8 text-pink-500" />,
    title: "Find Balance",
    description: "Evaluate your work-life harmony",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80"
  },
  {
    icon: <Book className="w-8 h-8 text-indigo-500" />,
    title: "Learn",
    description: "Extract valuable lessons from your experiences",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80"
  }
];

export default function FeatureGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="absolute inset-0">
            <img 
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
          </div>
          <div className="relative p-8 min-h-[300px] flex flex-col justify-end">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-200">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}