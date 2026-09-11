import React from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function CelebrationSection() {
  const shouldReduceMotion = useReducedMotion();

  // Stagger children animation
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.35,
        delayChildren: shouldReduceMotion ? 0 : 0.4,
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative w-full min-h-[90svh] flex flex-col justify-center items-center bg-emerald-deep overflow-hidden px-4 py-24 sm:py-32">
      
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep via-[#0A362E] to-emerald-deep z-0 pointer-events-none" />
      
      {/* Subtle warm ivory depth glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ivory-warm/15 via-emerald-deep/10 to-transparent pointer-events-none z-0" />
      
      {/* Extremely subtle geometric paper pattern */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-screen pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#C8A45D 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      {/* Paper grain overlay */}
      <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

      {/* Edge Floral/Botanical Accents - Ambient */}
      {/* Top Left */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 2.5 }}
        className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 aspect-square z-10 pointer-events-none drop-shadow-md mix-blend-screen"
      >
        <img src="/assets/images/top-floral-corner.png" alt="" className="w-full h-full object-contain object-top-left brightness-0 invert sepia-[0.3]" />
      </motion.div>
      
      {/* Bottom Right */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 2.5 }}
        className="absolute bottom-0 right-0 w-40 sm:w-56 lg:w-80 aspect-square z-10 pointer-events-none drop-shadow-xl mix-blend-screen"
        style={{ transform: 'scaleX(-1)' }}
      >
        <img src="/assets/images/bottom-floral-guldasta.png" alt="" className="w-full h-full object-contain object-bottom-left brightness-0 invert sepia-[0.3]" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
        className="relative z-20 w-full max-w-3xl mx-auto flex flex-col items-center text-center"
      >
        
        {/* Eyebrow */}
        <motion.div variants={itemVariant} className="mb-10 sm:mb-12">
          <h2 className="font-sans text-xs sm:text-sm tracking-[0.4em] text-gold-antique uppercase opacity-90 drop-shadow-sm">
            A Moment Before Forever
          </h2>
        </motion.div>

        {/* Central Delicate Ornamental Element: Two Paths Meeting */}
        <motion.div 
          variants={itemVariant} 
          className="flex justify-center items-center w-full gap-2 sm:gap-4 mb-10 sm:mb-14 opacity-85"
        >
          {/* Left Branch */}
          <div className="w-16 sm:w-24 overflow-hidden mix-blend-screen drop-shadow-sm" style={{ transform: 'scaleX(-1) rotate(15deg)' }}>
            <img src="/assets/images/corner-ornament.png" alt="" className="w-full object-contain brightness-0 invert sepia-[0.3]" />
          </div>
          
          {/* Central Union */}
          <div className="flex flex-col items-center gap-1.5 mx-2">
            <div className="w-1 h-1 rotate-45 bg-gold-antique/60" />
            <div className="w-2 h-2 rotate-45 bg-gold-antique" />
            <div className="w-1 h-1 rotate-45 bg-gold-antique/60" />
          </div>
          
          {/* Right Branch */}
          <div className="w-16 sm:w-24 overflow-hidden mix-blend-screen drop-shadow-sm" style={{ transform: 'rotate(15deg)' }}>
            <img src="/assets/images/corner-ornament.png" alt="" className="w-full object-contain brightness-0 invert sepia-[0.3]" />
          </div>
        </motion.div>

        {/* Main Quote */}
        <motion.div variants={itemVariant} className="mb-12 sm:mb-16 px-4">
          <h1 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-ivory-warm leading-[1.6] drop-shadow-sm">
            "Some moments are too beautiful<br className="hidden sm:block"/> to be measured in time."
          </h1>
        </motion.div>
        
        {/* Supporting Line */}
        <motion.div variants={itemVariant} className="mb-12 sm:mb-16 px-6">
          <p className="font-sans text-[0.65rem] sm:text-xs tracking-[0.25em] text-gold-antique/90 uppercase leading-[2.5]">
            And some memories are meant to stay with us, forever.
          </p>
        </motion.div>

        {/* Ornamental Divider */}
        <motion.div variants={itemVariant} className="flex items-center gap-3 sm:gap-4 opacity-80">
          <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-gold-antique/50 to-gold-antique" />
          <div className="flex gap-1 sm:gap-1.5">
             <div className="w-1 h-1 rotate-45 bg-gold-antique/60" />
             <div className="w-1.5 h-1.5 rotate-45 bg-gold-antique" />
             <div className="w-1 h-1 rotate-45 bg-gold-antique/60" />
          </div>
          <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent via-gold-antique/50 to-gold-antique" />
        </motion.div>

      </motion.div>
    </section>
  );
}

export default CelebrationSection;
