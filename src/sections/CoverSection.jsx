import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp, fadeIn, getVariant } from '../config/animations';

export function CoverSection() {
  const shouldReduceMotion = useReducedMotion();
  const couple = weddingData.couple;

  const fadeUpVariant = getVariant(fadeUp, shouldReduceMotion);
  const fadeInVariant = getVariant(fadeIn, shouldReduceMotion);

  // Stagger children animation
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.25,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center items-center bg-ivory-warm overflow-hidden px-4 py-20">
      
      {/* --- LAYER 1: LUXURY BACKGROUND DEPTH --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-warm via-[#F2EBD9] to-ivory-warm z-0" />
      
      {/* Extremely subtle geometric paper pattern */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#C8A45D 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      {/* Soft emerald depth glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-ivory-warm/40 to-emerald-deep/10 pointer-events-none z-0" />
      
      {/* Paper grain overlay */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

      {/* --- LAYER 2: FLORAL CORNER FRAMING --- */}
      {/* Top Left Floral Corner */}
      <motion.div 
        initial={{ opacity: 0, x: -30, y: -30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 aspect-square opacity-90 z-10 pointer-events-none drop-shadow-md"
      >
        <img src="/assets/images/top-floral-corner.png" alt="" className="w-full h-full object-contain object-top-left" />
      </motion.div>
      
      {/* Top Right Floral Corner (Mirrored) */}
      <motion.div 
        initial={{ opacity: 0, x: 30, y: -30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 aspect-square opacity-90 z-10 pointer-events-none drop-shadow-md"
      >
        <img src="/assets/images/top-floral-corner.png" alt="" className="w-full h-full object-contain object-top-left -scale-x-100" />
      </motion.div>

      {/* Bottom Left Guldasta */}
      <motion.div 
        initial={{ opacity: 0, x: -30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute bottom-0 left-0 w-40 sm:w-56 lg:w-80 aspect-square opacity-[0.85] z-10 pointer-events-none drop-shadow-xl"
      >
        <img src="/assets/images/bottom-floral-guldasta.png" alt="" className="w-full h-full object-contain object-bottom-left" />
      </motion.div>
      
      {/* Bottom Right Guldasta (Mirrored) */}
      <motion.div 
        initial={{ opacity: 0, x: 30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute bottom-0 right-0 w-40 sm:w-56 lg:w-80 aspect-square opacity-[0.85] z-10 pointer-events-none drop-shadow-xl"
      >
        <img src="/assets/images/bottom-floral-guldasta.png" alt="" className="w-full h-full object-contain object-bottom-left -scale-x-100" />
      </motion.div>

      {/* --- LAYER 3: MAIN TYPOGRAPHY & CONTENT --- */}
      <motion.div 
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center text-center z-20 max-w-4xl w-full"
      >
        
        {/* Bismillah */}
        <motion.div variants={itemVariant} className="mb-8 sm:mb-10">
          <p className="font-arabic text-2xl sm:text-3xl lg:text-4xl text-gold-dark tracking-wider opacity-85 drop-shadow-sm">
            {couple.bismillahText}
          </p>
        </motion.div>

        {/* Monogram Seal */}
        <motion.div variants={itemVariant} className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-8 sm:mb-12">
          <img src="/assets/images/cover-monogram.png" alt="" className="absolute inset-0 w-full h-full object-contain opacity-95 drop-shadow-lg" />
          <span className="relative font-serif italic text-2xl sm:text-3xl text-emerald-deep font-normal mt-1">
            {couple.monogram}
          </span>
        </motion.div>
        
        {/* Adnan */}
        <motion.div variants={itemVariant} className="flex flex-col items-center">
          <h1 className="font-serif text-[clamp(3.25rem,14vw,8.5rem)] text-emerald-deep uppercase tracking-tighter leading-[0.85] drop-shadow-sm">
            {weddingData.groom.firstName}
          </h1>
        </motion.div>
        
        {/* Elegant & */}
        <motion.div variants={itemVariant} className="flex items-center justify-center gap-6 sm:gap-12 my-6 sm:my-8 opacity-90 w-full max-w-[200px] sm:max-w-[300px]">
          <div className="flex items-center gap-2 flex-1">
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-antique/60 flex-shrink-0" />
            <span className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold-antique to-gold-dark" />
          </div>
          
          <span className="block font-serif text-4xl sm:text-5xl lg:text-6xl text-gold-dark font-light italic flex-shrink-0">
            &amp;
          </span>
          
          <div className="flex items-center gap-2 flex-1">
            <span className="h-[1px] w-full bg-gradient-to-l from-transparent via-gold-antique to-gold-dark" />
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-antique/60 flex-shrink-0" />
          </div>
        </motion.div>

        {/* Aleena */}
        <motion.div variants={itemVariant} className="flex flex-col items-center mb-10 sm:mb-14">
          <h1 className="font-serif text-[clamp(3.25rem,14vw,8.5rem)] text-emerald-deep uppercase tracking-tighter leading-[0.85] drop-shadow-sm">
            {weddingData.bride.firstName}
          </h1>
        </motion.div>

        {/* Elegant Invitation Phrase */}
        <motion.div variants={itemVariant} className="flex flex-col items-center opacity-85 px-6">
          <p className="font-serif italic text-lg sm:text-2xl text-emerald-deep leading-relaxed max-w-[280px] sm:max-w-md">
            "With hearts full of gratitude, <br/>
            we begin a beautiful new chapter together."
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default CoverSection;
