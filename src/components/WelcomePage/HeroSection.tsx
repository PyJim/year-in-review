import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  onStart: () => void;
}

export default function HeroSection({ onStart }: Props) {
  return (
    <div className="relative overflow-hidden mb-16">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-50"
          poster="https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?auto=format&fit=crop&q=80"
        >
          <source src="https://player.vimeo.com/external/370467553.hd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=174&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            Your Year in Review
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Take a moment to reflect on your journey through {new Date().getFullYear()}. 
            Celebrate your victories, learn from your challenges, and set your intentions for the year ahead.
          </p>
          <button
            onClick={onStart}
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-black bg-white rounded-lg hover:bg-gray-100 transition-all group shadow-lg hover:-translate-y-0.5"
          >
            Begin Your Review
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}