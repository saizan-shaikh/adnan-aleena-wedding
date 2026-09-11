import React from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function ClosingSection() {
  const shouldReduceMotion = useReducedMotion();

  // Stagger children animation
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.4,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative w-full min-h-[65svh] lg:min-h-[75svh] bg-emerald-deep flex flex-col justify-center items-center py-16 sm:py-20 overflow-hidden px-4">
      
      {/* Background Textures & Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep via-[#0A362E] to-emerald-deep z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ivory-warm/10 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 opacity-[0.05] mix-blend-screen pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#C8A45D 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

      {/* Decorative Edges / Top Florals */}
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.25 }} viewport={{ once: true }} transition={{ duration: 3 }}
        className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 z-10 pointer-events-none mix-blend-screen brightness-0 invert sepia-[0.3]"
      >
        <img src="/assets/images/top-floral-corner.png" alt="" className="w-full h-full object-contain object-top-left" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.25 }} viewport={{ once: true }} transition={{ duration: 3 }}
        className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 z-10 pointer-events-none mix-blend-screen brightness-0 invert sepia-[0.3]"
        style={{ transform: 'scaleX(-1)' }}
      >
        <img src="/assets/images/top-floral-corner.png" alt="" className="w-full h-full object-contain object-top-left" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-6 sm:mt-8"
      >
        
        {/* Eyebrow */}
        <motion.div variants={itemVariant} className="mb-6 sm:mb-8">
          <h2 className="font-sans text-[0.65rem] sm:text-xs tracking-[0.4em] text-gold-antique uppercase opacity-90 drop-shadow-sm">
            With Love & Duas
          </h2>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariant} className="mb-8 sm:mb-10 px-4">
          <h1 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-ivory-warm leading-tight drop-shadow-sm">
            Until We Meet To Celebrate
          </h1>
        </motion.div>

        {/* Heartfelt Message */}
        <motion.div variants={itemVariant} className="mb-10 sm:mb-12 px-6 max-w-lg mx-auto">
          <p className="font-serif text-lg sm:text-xl text-ivory-pure/85 leading-relaxed">
            "May this new chapter be filled with love, mercy, laughter and countless beautiful moments."
          </p>
        </motion.div>

        {/* Subtle Islamic-inspired ornamental divider */}
        <motion.div variants={itemVariant} className="flex items-center gap-4 opacity-70 justify-center w-full mb-10 sm:mb-12">
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-gold-antique" />
          <div className="w-5 h-5 opacity-80 mix-blend-screen brightness-[1.5] contrast-[1.2] sepia-[0.4] hue-rotate-[-10deg]">
            <img src="/assets/images/corner-ornament.png" alt="" className="w-full h-full object-contain transform rotate-45" />
          </div>
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-gold-antique" />
        </motion.div>

        {/* Final Closing Line */}
        <motion.div variants={itemVariant} className="mb-10 sm:mb-12 px-4 max-w-lg mx-auto">
          <p className="font-sans text-xs sm:text-[0.8rem] tracking-[0.25em] text-gold-antique uppercase leading-loose opacity-90">
            Your presence, your prayers, and<br />your love mean the world to us.
          </p>
        </motion.div>

        {/* Final Emblem & Floral Composition (Wreath) */}
        <motion.div variants={itemVariant} className="relative flex flex-col items-center justify-center w-full mt-2">
          
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex flex-col items-center justify-center">
            
            {/* The Outer Wreath */}
            <div className="absolute inset-0 z-0">
               {/* We use groom-medallion.png as it provides a beautiful transparent botanical wreath */}
               <img 
                 src="/assets/images/groom-medallion.png" 
                 alt="" 
                 className="w-full h-full object-contain opacity-80 mix-blend-screen brightness-125 sepia-[0.2]" 
               />
            </div>
            
            {/* Inner Content */}
            <div className="relative z-10 flex flex-col items-center justify-center mt-1">
              
              {/* Small Monogram Seal */}
              <div className="w-10 sm:w-11 aspect-square mb-2 opacity-90">
                <img 
                  src="/assets/images/cover-monogram.png" 
                  alt="Seal" 
                  className="w-full h-full object-contain mix-blend-screen brightness-[1.5] contrast-[1.2] sepia-[0.4] hue-rotate-[-10deg]" 
                />
              </div>

              {/* With Love Text */}
              <span className="font-serif italic text-lg sm:text-xl text-ivory-warm tracking-wider drop-shadow-sm">
                With Love
              </span>
              
              {/* Tiny Elegant Divider */}
              <div className="flex items-center justify-center gap-1.5 opacity-80 mt-2">
                <div className="w-4 h-[1px] bg-gold-antique" />
                <div className="w-1 h-1 border-[0.5px] border-gold-antique rotate-45" />
                <div className="w-4 h-[1px] bg-gold-antique" />
              </div>
              
            </div>
            
          </div>
          
        </motion.div>

      </motion.div>
    </section>
  );
}

export default ClosingSection;
