import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { weddingData } from '../data/wedding';
import { handleImageError } from '../utils/media';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp, fadeIn, scaleUp, getVariant } from '../config/animations';
import ScratchDateCard from './ScratchDateCard';

export function WeddingHero({ isOpen, onOpenInvitation }) {
  const [isPhotoRevealed, setIsPhotoRevealed] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const couple = weddingData.couple;
  const groom = weddingData.groom;
  const bride = weddingData.bride;

  const fadeUpVariant = getVariant(fadeUp, shouldReduceMotion);
  const fadeInVariant = getVariant(fadeIn, shouldReduceMotion);
  const scaleUpVariant = getVariant(scaleUp, shouldReduceMotion);

  const togglePhotoReveal = () => {
    setIsPhotoRevealed((prev) => !prev);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-ivory-warm text-dark-text overflow-hidden bg-pattern-subtle bg-radial-emerald-glow">
      {/* Background Lighting Vignettes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gold-antique/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-deep/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Composition Container */}
      <div className="relative z-10 max-w-3xl w-full mx-auto text-center space-y-6 sm:space-y-10">
        
        {/* 1. Bismillah Calligraphy & Sacred Quranic Verse */}
        {couple.bismillahText && (
          <motion.div 
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            <p className="font-serif text-3xl sm:text-4xl text-gold-antique tracking-widest leading-relaxed dir-rtl font-bold drop-shadow-sm">
              {couple.bismillahText}
            </p>

            <div className="gold-divider max-w-[160px] mx-auto opacity-70 my-2" />

            {couple.quranVerseArabic && (
              <div className="space-y-1">
                <p className="font-serif text-xl sm:text-2xl text-emerald-deep font-semibold italic">
                  "{couple.quranVerseTranslation}"
                </p>
                <p className="text-xs text-gold-dark font-sans tracking-widest uppercase font-medium">
                  {couple.quranVerseReference}
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* 2. Interactive Sealed Couple Photo Card (Initial Cover -> Tap to Reveal Real Photo) */}
        <motion.div 
          variants={scaleUpVariant}
          initial="hidden"
          animate="visible"
          className="relative max-w-[280px] sm:max-w-[340px] md:max-w-[370px] mx-auto aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl gold-foil-border emerald-shadow group cursor-pointer"
          onClick={togglePhotoReveal}
          tabIndex={0}
          role="button"
          aria-label={isPhotoRevealed ? "Hide couple portrait" : "Reveal real couple portrait of Abdullah & Aamena"}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              togglePhotoReveal();
            }
          }}
        >
          <AnimatePresence mode="wait">
            {!isPhotoRevealed ? (
              /* Sealed Royal Envelope / Arch Cover (Hidden State) */
              <motion.div
                key="cover"
                initial={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-gradient-to-b from-emerald-deep via-[#072F29] to-[#041E1A] flex flex-col items-center justify-between p-6 sm:p-8 text-ivory-warm z-20"
              >
                {/* Decorative Gold Filigree Background Pattern */}
                <div className="absolute inset-2 rounded-t-full border border-gold-antique/40 pointer-events-none" />
                <div className="absolute inset-4 rounded-t-full border border-gold-antique/20 pointer-events-none" />

                {/* Top Arch Motif */}
                <div className="pt-4 space-y-1">
                  <span className="text-gold-antique text-xs uppercase tracking-[0.3em] font-semibold block">
                    Royal Seal
                  </span>
                  <div className="w-10 h-0.5 bg-gold-antique/60 mx-auto" />
                </div>

                {/* Center Monogram Crest */}
                <div className="relative py-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-deep/90 border-2 border-gold-antique flex flex-col items-center justify-center shadow-xl gold-glow-lg">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-antique tracking-wider">
                      {couple.monogram}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-ivory-muted opacity-80">
                      EST. 2026
                    </span>
                  </div>
                </div>

                {/* Bottom Tap to Reveal Instruction */}
                <div className="pb-4 space-y-2">
                  <p className="font-serif italic text-base sm:text-lg text-gold-antique">
                    Abdullah &amp; Aamena
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-antique/15 border border-gold-antique/50 text-gold-light text-xs font-sans tracking-widest uppercase transition-all duration-300 group-hover:bg-gold-antique group-hover:text-emerald-deep">
                    <span>✨ TAP TO REVEAL PHOTO ✨</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Revealed Real Couple Photograph (Revealed State) */
              <motion.div
                key="photo"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full"
              >
                <img 
                  src={couple.heroImage} 
                  alt={`${groom.fullName} & ${bride.fullName} - Royal Muslim Wedding Couple Portrait`}
                  onError={(e) => handleImageError(e, '/assets/images/couple-placeholder.svg')}
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-1000 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/45 via-transparent to-transparent pointer-events-none" />

                {/* Subtle Tap to Hide Badge */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-deep/70 backdrop-blur-sm border border-gold-antique/40 text-[10px] text-ivory-warm tracking-wider uppercase">
                  Tap to cover photo
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 3. Primary Typographic Centerpiece: Abdullah & Aamena */}
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="space-y-3 pt-2"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-dark font-semibold">
            {couple.subHeading}
          </p>
          
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-emerald-deep font-bold tracking-tight leading-tight">
            <span className="block">{groom.firstName}</span>
            <span className="block my-1 font-serif italic text-3xl sm:text-5xl text-gold-antique font-normal">
              &amp;
            </span>
            <span className="block">{bride.firstName}</span>
          </h1>

          <p className="text-sm sm:text-base text-dark-muted font-sans max-w-xl mx-auto leading-relaxed pt-2">
            {couple.invitationText}
          </p>
        </motion.div>

        {/* 4. Interactive Canvas Scratch Date Card Plaque */}
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          <ScratchDateCard />
        </motion.div>

        {/* 5. Open Invitation Luxury CTA Seal */}
        <motion.div 
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          className="pt-2 sm:pt-4"
        >
          <button
            type="button"
            onClick={onOpenInvitation}
            className={`inline-flex items-center gap-3 px-9 py-4 rounded-full font-serif font-semibold text-base sm:text-lg tracking-widest uppercase transition-all duration-500 shadow-2xl focus-visible:outline-none ${
              isOpen 
                ? 'bg-gold-antique text-emerald-deep hover:bg-gold-light ring-2 ring-gold-antique shadow-gold-antique/50 scale-105'
                : 'bg-emerald-deep text-ivory-warm hover:bg-emerald-light gold-border hover:shadow-emerald-deep/50'
            }`}
          >
            <span>{isOpen ? '✨ INVITATION UNLOCKED ✨' : 'OPEN INVITATION'}</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-180 text-emerald-deep' : 'animate-bounce text-gold-antique'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default WeddingHero;
