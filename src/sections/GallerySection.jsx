import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function GallerySection() {
  const shouldReduceMotion = useReducedMotion();
  const gallery = weddingData.galleryData;
  
  if (!gallery || !gallery.items || gallery.items.length === 0) return null;
  const items = gallery.items;

  // Cinematic item reveal variant
  const itemVariant = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 45,
      scale: shouldReduceMotion ? 1 : 0.96,
      filter: shouldReduceMotion ? 'blur(0px)' : 'blur(5px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Reusable Photo Frame Component
  const PhotoFrame = ({ item, className, floralTop, floralBottom, imageClass = "" }) => (
    <motion.div variants={itemVariant} className={`relative block group ${className}`}>
      <div className="relative w-full overflow-hidden drop-shadow-2xl bg-ivory-warm p-2 sm:p-3 shadow-[0_30px_60px_-20px_rgba(11,61,53,0.15)]">
        
        {/* Subtle inner gold border */}
        <div className="absolute inset-2 sm:inset-3 border border-gold-antique/40 z-20 pointer-events-none mix-blend-overlay" />
        
        <img 
          src={item.image} 
          alt={item.alt} 
          className={`w-full h-auto object-cover transform transition-transform duration-[2s] ease-out group-hover:scale-[1.03] ${imageClass}`}
          loading="lazy" 
        />
        
        {/* Decorative Florals */}
        {floralTop && (
          <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-28 sm:w-36 opacity-90 z-30 pointer-events-none drop-shadow-md">
            <img src="/assets/images/top-floral-corner.png" alt="" className="w-full h-full object-contain" />
          </div>
        )}
        {floralBottom && (
          <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-36 sm:w-48 opacity-[0.85] z-30 pointer-events-none drop-shadow-xl">
            <img src="/assets/images/bottom-floral-guldasta.png" alt="" className="w-full h-full object-contain -scale-x-100" />
          </div>
        )}
      </div>

      {/* Elegant Caption */}
      {item.caption && (
        <div className="mt-5 flex flex-col items-center">
          <span className="font-serif italic text-emerald-deep text-lg sm:text-2xl opacity-90 tracking-wide">{item.caption}</span>
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-gold-antique to-transparent mt-3 opacity-70" />
        </div>
      )}
    </motion.div>
  );

  return (
    <section className="relative w-full bg-ivory-warm py-24 sm:py-40 overflow-hidden">
      
      {/* Background Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-warm via-[#F2EBD9]/60 to-ivory-warm z-0 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#C8A45D 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-ivory-warm/20 to-emerald-deep/5 pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* BLOCK 1: Intro & First Memory */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%", amount: 0.2 }}
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.4 }}
          className="w-full flex flex-col items-center mb-24 sm:mb-40 px-4"
        >
          <motion.div variants={itemVariant} className="text-center mb-16 sm:mb-24">
            <h2 className="font-sans text-xs sm:text-sm tracking-[0.5em] text-gold-dark uppercase mb-6 sm:mb-8 opacity-80">
              {gallery.title}
            </h2>
            <p className="font-serif italic text-2xl sm:text-4xl lg:text-5xl text-emerald-deep leading-relaxed sm:leading-relaxed max-w-xl mx-auto whitespace-pre-line drop-shadow-sm">
              {gallery.intro}
            </p>
          </motion.div>
          
          <PhotoFrame item={items[0]} floralTop className="w-[90%] sm:w-[60%] lg:w-[45%] mx-auto" imageClass="aspect-[4/5]" />
        </motion.div>

        {/* BLOCK 2: Asymmetric Duo */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%", amount: 0.1 }}
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.4 }}
          className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-20 sm:gap-8 mb-24 sm:mb-40 px-4 sm:px-12 lg:px-24"
        >
          <PhotoFrame item={items[1]} className="w-[85%] sm:w-[42%] lg:w-[38%] sm:mt-32 ml-0 mr-auto sm:mx-0" />
          <PhotoFrame item={items[2]} floralBottom className="w-[95%] sm:w-[50%] lg:w-[48%] ml-auto mr-0 sm:mx-0" />
        </motion.div>

        {/* BLOCK 3: Breathing Space */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
          variants={itemVariant}
          className="w-full flex flex-col items-center justify-center mb-24 sm:mb-40 opacity-70"
        >
          <div className="w-2 h-2 rotate-45 bg-gold-antique mb-6" />
          <div className="w-[1px] h-32 bg-gradient-to-b from-gold-antique to-transparent" />
        </motion.div>

        {/* BLOCK 4: Offset Duo */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%", amount: 0.1 }}
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.4 }}
          className="w-full flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-center gap-20 sm:gap-12 mb-24 sm:mb-40 px-4 sm:px-16 lg:px-32"
        >
          <PhotoFrame item={items[3]} className="w-[80%] sm:w-[38%] lg:w-[35%] ml-auto mr-0 sm:mr-auto z-10" />
          <PhotoFrame item={items[4]} floralTop className="w-[88%] sm:w-[48%] lg:w-[45%] ml-0 mr-auto sm:ml-auto sm:-mt-32" />
        </motion.div>

        {/* BLOCK 5: The Finale */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%", amount: 0.2 }}
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.4 }}
          className="w-full flex flex-col items-center mb-12 sm:mb-24 px-4"
        >
          <PhotoFrame item={items[5]} floralBottom className="w-[100%] sm:w-[75%] lg:w-[65%] mx-auto" />
          
          <motion.div variants={itemVariant} className="mt-20 sm:mt-32 flex flex-col items-center opacity-80">
            <div className="w-1.5 h-1.5 rotate-45 bg-gold-antique mb-3" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold-antique/60 mb-3" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold-antique/30" />
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}

export default GallerySection;
