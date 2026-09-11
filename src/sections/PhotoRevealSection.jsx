import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { weddingData } from '../data/wedding';
import { handleImageError } from '../utils/media';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp, fadeIn, getVariant } from '../config/animations';

export function PhotoRevealSection() {
  const [isRevealed, setIsRevealed] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const couple = weddingData.couple;

  const fadeUpVariant = getVariant(fadeUp, shouldReduceMotion);
  const fadeInVariant = getVariant(fadeIn, shouldReduceMotion);

  return (
    <section className="relative w-full min-h-[90svh] flex flex-col justify-center items-center bg-ivory-pure py-20 px-4">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col items-center w-full max-w-4xl mx-auto"
      >
        
        {/* Subtle Typography Header */}
        <motion.div variants={fadeInVariant} className="text-center mb-10">
          <p className="font-sans text-xs tracking-[0.25em] text-gold-dark uppercase mb-2">
            The Bride & Groom
          </p>
          <div className="w-12 h-[1px] bg-gold-antique mx-auto opacity-50" />
        </motion.div>

        {/* Photo Container */}
        <motion.div variants={fadeUpVariant} className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-[400px] sm:h-[500px] md:h-[600px] mx-auto rounded-t-[10rem] rounded-b-md shadow-2xl overflow-hidden border-4 border-ivory-warm">
          
          {/* Actual Photograph */}
          <div className="absolute inset-0 z-0">
            <img 
              src={couple.heroImage} 
              alt="The Couple"
              onError={(e) => handleImageError(e, '/assets/images/couple-placeholder.svg')}
              className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              loading="lazy"
            />
            {/* Subtle luxury vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Reveal Overlay - Dissolves on Click */}
          <AnimatePresence>
            {!isRevealed && (
              <motion.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-emerald-deep/95 backdrop-blur-sm cursor-pointer border border-gold-antique/30"
                onClick={() => setIsRevealed(true)}
                role="button"
                tabIndex={0}
                aria-label="Reveal Photograph"
                onKeyDown={(e) => e.key === 'Enter' && setIsRevealed(true)}
              >
                {/* Decorative Pattern / Line Art on Cover */}
                <div className="absolute inset-4 border border-gold-antique/20 rounded-t-[10rem] rounded-b-md pointer-events-none" />
                
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center text-center p-6"
                >
                  <span className="font-serif italic text-3xl text-gold-antique mb-4">Tap to Reveal</span>
                  <div className="w-[1px] h-12 bg-gradient-to-b from-gold-antique to-transparent" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
        </motion.div>
        
        {/* Supporting Typography underneath photo */}
        <motion.div variants={fadeInVariant} className="text-center mt-12 max-w-md">
          <p className="font-serif text-2xl text-emerald-deep italic mb-3">
            {couple.quranVerseTranslation}
          </p>
          <p className="font-sans text-xs tracking-widest text-dark-text/60 uppercase">
            {couple.quranVerseReference}
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default PhotoRevealSection;
