import React from 'react';
import HeroSection from './HeroSection';
import FeatureGrid from './FeatureGrid';

interface Props {
  onStart: () => void;
}

export default function WelcomePage({ onStart }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <HeroSection onStart={onStart} />
      <FeatureGrid />
    </div>
  );
}