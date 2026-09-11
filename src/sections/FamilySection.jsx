import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function FamilySection() {
  const shouldReduceMotion = useReducedMotion();
  const { family } = weddingData;

  // Stagger children animation
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.3,
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
    <section className="relative w-full min-h-[90svh] flex flex-col justify-center items-center bg-emerald-deep overflow-hidden px-4 py-24 sm:py-32">
      
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep via-[#0A362E] to-emerald-deep z-0 pointer-events-none" />
      
      {/* Subtle warm ivory depth glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ivory-warm/10 via-transparent to-transparent pointer-events-none z-0" />
      
      {/* Extremely subtle geometric paper pattern */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-screen pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#C8A45D 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      {/* Paper grain overlay */}
      <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

      {/* Decorative Corners */}
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }} viewport={{ once: true }} transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 opacity-30 z-10 pointer-events-none drop-shadow-md mix-blend-screen brightness-0 invert sepia-[0.3]"
      >
        <img src="/assets/images/top-floral-corner.png" alt="" className="w-full h-full object-contain object-top-left" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }} viewport={{ once: true }} transition={{ duration: 2 }}
        className="absolute bottom-0 right-0 w-40 sm:w-56 lg:w-80 opacity-20 z-10 pointer-events-none drop-shadow-md mix-blend-screen brightness-0 invert sepia-[0.3]"
        style={{ transform: 'scaleX(-1)' }}
      >
        <img src="/assets/images/bottom-floral-guldasta.png" alt="" className="w-full h-full object-contain object-bottom-left" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
        className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        
        {/* Eyebrow */}
        <motion.div variants={itemVariant} className="mb-8 sm:mb-10">
          <h2 className="font-sans text-xs sm:text-sm tracking-[0.4em] text-gold-antique uppercase opacity-90 drop-shadow-sm">
            With the Blessings of Family
          </h2>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariant} className="mb-6 sm:mb-8">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory-warm tracking-wider drop-shadow-sm">
            Together, With Their Families
          </h1>
        </motion.div>
        
        {/* Supporting Line */}
        <motion.div variants={itemVariant} className="mb-16 sm:mb-24 px-6 max-w-2xl">
          <p className="font-serif italic text-lg sm:text-xl text-ivory-pure/80 leading-relaxed">
            With the love, prayers and blessings of those who have always been beside them.
          </p>
        </motion.div>

        {/* Family Columns Container */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 relative">
          
          {/* Central Motif for Desktop (Hidden on Mobile) */}
          <motion.div variants={itemVariant} className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-10">
            <div className="flex flex-col items-center gap-4 opacity-70">
              <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold-antique to-gold-antique" />
              <div className="w-8 h-8 opacity-80 mix-blend-screen brightness-[1.5] contrast-[1.2] sepia-[0.4] hue-rotate-[-10deg]">
                <img src="/assets/images/corner-ornament.png" alt="" className="w-full h-full object-contain transform rotate-45" />
              </div>
              <div className="w-[1px] h-24 bg-gradient-to-t from-transparent via-gold-antique to-gold-antique" />
            </div>
          </motion.div>

          {/* Groom's Family */}
          <motion.div variants={itemVariant} className="w-full md:w-1/2 flex flex-col items-center px-4">
            <h3 className="font-sans text-xs sm:text-sm tracking-[0.3em] text-gold-dark uppercase mb-6 sm:mb-8">
              Groom's Family
            </h3>
            
            <div className="flex flex-col items-center gap-4">
              {family.groomParents && (
                <div className="flex flex-col items-center">
                  <span className="font-serif text-2xl sm:text-3xl text-ivory-warm tracking-wide">{family.groomParents}</span>
                  <span className="font-sans text-[0.65rem] sm:text-xs tracking-[0.2em] text-gold-antique/70 uppercase mt-2">Parents</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Central Motif for Mobile (Hidden on Desktop) */}
          <motion.div variants={itemVariant} className="md:hidden flex items-center justify-center my-4 opacity-70">
             <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold-antique" />
               <div className="w-5 h-5 opacity-80 mix-blend-screen brightness-[1.5] contrast-[1.2] sepia-[0.4] hue-rotate-[-10deg]">
                 <img src="/assets/images/corner-ornament.png" alt="" className="w-full h-full object-contain transform rotate-45" />
               </div>
               <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold-antique" />
             </div>
          </motion.div>

          {/* Bride's Family */}
          <motion.div variants={itemVariant} className="w-full md:w-1/2 flex flex-col items-center px-4">
            <h3 className="font-sans text-xs sm:text-sm tracking-[0.3em] text-gold-dark uppercase mb-6 sm:mb-8">
              Bride's Family
            </h3>
            
            <div className="flex flex-col items-center gap-4">
              {family.brideParents && (
                <div className="flex flex-col items-center">
                  <span className="font-serif text-2xl sm:text-3xl text-ivory-warm tracking-wide">{family.brideParents}</span>
                  <span className="font-sans text-[0.65rem] sm:text-xs tracking-[0.2em] text-gold-antique/70 uppercase mt-2">Parents</span>
                </div>
              )}
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}

export default FamilySection;
