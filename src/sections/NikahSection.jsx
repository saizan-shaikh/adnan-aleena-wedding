import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp, fadeIn, getVariant } from '../config/animations';

export function NikahSection() {
  const shouldReduceMotion = useReducedMotion();
  const couple = weddingData.couple;
  const family = weddingData.family;

  const fadeUpVariant = getVariant(fadeUp, shouldReduceMotion);
  const fadeInVariant = getVariant(fadeIn, shouldReduceMotion);

  return (
    <section className="relative w-full min-h-[70svh] flex flex-col justify-center items-center bg-ivory-pure py-24 px-4 sm:px-8 border-y border-gold-antique/10">
      
      {/* Background corner ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 bg-[radial-gradient(circle_at_top_left,_#C8A45D_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_#0B3D35_0%,_transparent_70%)] pointer-events-none" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col items-center text-center max-w-2xl mx-auto z-10"
      >
        <motion.div variants={fadeInVariant} className="mb-10">
          <p className="font-sans text-xs tracking-[0.25em] text-gold-dark uppercase mb-2">
            The Invitation
          </p>
          <div className="w-12 h-[1px] bg-gold-antique mx-auto opacity-50" />
        </motion.div>

        <motion.div variants={fadeUpVariant} className="space-y-8 flex flex-col items-center">
          <p className="font-serif italic text-2xl sm:text-3xl text-emerald-deep leading-relaxed px-4">
            {couple.subHeading}
          </p>

          <p className="font-sans text-sm sm:text-base text-dark-text/80 leading-loose max-w-lg tracking-wide px-6">
            {couple.invitationText}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 pt-8">
            <div className="flex flex-col items-center">
              <span className="font-serif text-lg sm:text-xl text-emerald-deep font-semibold">{weddingData.groom.fullName}</span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-gold-dark mt-2 max-w-[200px]">
                {weddingData.groom.title}
              </span>
            </div>
            
            <span className="font-serif italic text-2xl text-gold-antique">&amp;</span>
            
            <div className="flex flex-col items-center">
              <span className="font-serif text-lg sm:text-xl text-emerald-deep font-semibold">{weddingData.bride.fullName}</span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-gold-dark mt-2 max-w-[200px]">
                {weddingData.bride.title}
              </span>
            </div>
          </div>

          <div className="pt-10 w-full flex flex-col items-center opacity-80">
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-dark-text/60 mb-2">Together with their families</span>
            <span className="font-serif italic text-lg text-emerald-deep">{family.hosts.join(' & ')}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default NikahSection;
