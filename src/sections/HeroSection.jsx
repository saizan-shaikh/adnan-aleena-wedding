import React, { useState } from 'react';
import WeddingHero from '../components/WeddingHero';

export function HeroSection() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsEnvelopeOpen(true);
    const target = document.getElementById('invitation');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Full-Screen Hero View */}
      <WeddingHero 
        isOpen={isEnvelopeOpen} 
        onOpenInvitation={handleOpenInvitation} 
      />
    </div>
  );
}

export default HeroSection;
