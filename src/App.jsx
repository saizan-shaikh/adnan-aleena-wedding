import React, { useEffect } from 'react';
import CoverSection from './sections/CoverSection';
import PhotoRevealSection from './sections/PhotoRevealSection';
import ScratchDateSection from './sections/ScratchDateSection';
import NikahSection from './sections/NikahSection';
import EventsSection from './sections/EventsSection';
import CoupleSection from './sections/CoupleSection';
import JourneySection from './sections/JourneySection';
import GallerySection from './sections/GallerySection';
import CelebrationSection from './sections/CelebrationSection';
import VenueSection from './sections/VenueSection';
import FamilySection from './sections/FamilySection';
import RsvpSection from './sections/RsvpSection';
import ClosingSection from './sections/ClosingSection';
import { weddingData } from './data/wedding';
import { updateMetaTags } from './utils/seo';

export function App() {
  useEffect(() => {
    updateMetaTags(weddingData.meta);
  }, []);

  return (
    <main className="w-full min-h-screen bg-ivory-pure text-dark-text font-sans antialiased selection:bg-gold-antique/30 selection:text-emerald-deep">
      
      {/* 1. Opening / Cover */}
      <CoverSection />

      {/* 2. Couple Photo Reveal */}
      <PhotoRevealSection />

      {/* 3. Scratch-to-Reveal Wedding Date */}
      <ScratchDateSection />

      {/* 4. Invitation / Nikah Introduction */}
      <NikahSection />

      {/* 5. Wedding Events */}
      <EventsSection />

      {/* 6. The Couple */}
      <CoupleSection />

      {/* 7. Our Journey */}
      <JourneySection />

      {/* 8. Memories Gallery */}
      <GallerySection />

      {/* 9. The Celebration Transition */}
      <CelebrationSection />

      {/* 10. The Venue */}
      <VenueSection />

      {/* 11. Family Blessings */}
      <FamilySection />

      {/* 12. RSVP */}
      <RsvpSection />

      {/* 13. Final Closing */}
      <ClosingSection />

    </main>
  );
}

export default App;
