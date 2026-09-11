import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { handleImageError } from '../utils/media';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp, fadeIn, getVariant } from '../config/animations';

export function CoupleSection() {
  const shouldReduceMotion = useReducedMotion();
  const groom = weddingData.groom;
  const bride = weddingData.bride;

  const fadeUpVariant = getVariant(fadeUp, shouldReduceMotion);
  const fadeInVariant = getVariant(fadeIn, shouldReduceMotion);

  return (
    <section className="relative w-full min-h-[90svh] flex flex-col justify-center items-center bg-ivory-warm py-24 px-4 overflow-hidden">
      
      {/* Decorative linework */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent to-gold-antique/50" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col items-center w-full max-w-5xl mx-auto z-10"
      >
        
        {/* Layered Portrait Composition */}
        <motion.div variants={fadeUpVariant} className="relative w-full max-w-[320px] sm:max-w-[400px] h-[450px] sm:h-[550px] flex items-center justify-center mb-32 sm:mb-40">
          
          {/* Groom Portrait (Top Left) */}
          <div className="absolute top-0 left-0 w-[45%] sm:w-56 z-20 drop-shadow-xl">
            <div className="relative w-full rounded-t-full rounded-b-xl overflow-hidden border border-gold-antique/60">
              <img 
                src={groom.image} 
                alt={`Groom - ${groom.fullName}`}
                onError={(e) => handleImageError(e, '/assets/images/couple-placeholder.svg')}
                className="w-full h-auto block grayscale-[10%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/30 via-transparent to-transparent pointer-events-none" />
            </div>
            <img 
              src="/assets/images/floral-garland.png"
              alt=""
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[80%] w-[115%] sm:w-[125%] max-w-none pointer-events-none drop-shadow-md z-30"
              aria-hidden="true"
            />
          </div>

          {/* Bride Portrait (Bottom Right) */}
          <div className="absolute bottom-0 right-0 w-[45%] sm:w-56 z-30 drop-shadow-2xl">
            <div className="relative w-full rounded-t-full rounded-b-xl overflow-hidden border border-ivory-pure">
              <img 
                src={bride.image} 
                alt={`Bride - ${bride.fullName}`}
                onError={(e) => handleImageError(e, '/assets/images/couple-placeholder.svg')}
                className="w-full h-auto block grayscale-[10%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/30 via-transparent to-transparent pointer-events-none" />
            </div>
            <img 
              src="/assets/images/floral-garland.png"
              alt=""
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[80%] w-[115%] sm:w-[125%] max-w-none pointer-events-none drop-shadow-md z-30"
              aria-hidden="true"
            />
          </div>
          
          {/* Groom Medallion */}
          <div className="absolute top-6 sm:top-10 right-0 sm:right-4 w-[40%] max-w-[140px] sm:max-w-[180px] aspect-square flex flex-col items-center justify-center z-10 drop-shadow-lg">
            <img src="/assets/images/groom-medallion.png" alt="" className="absolute inset-0 w-full h-full object-contain opacity-90" />
            <div className="relative z-10 flex flex-col items-center text-center mt-1">
              <span className="font-serif text-[clamp(0.8rem,3vw,1.3rem)] text-emerald-deep font-bold tracking-widest leading-none">
                ADNAN
              </span>
              <span className="font-sans text-[clamp(0.45rem,1.5vw,0.6rem)] text-gold-dark tracking-[0.3em] uppercase mt-1 sm:mt-1.5">
                Groom
              </span>
            </div>
          </div>

          {/* Bride Medallion */}
          <div className="absolute bottom-0 sm:bottom-2 -left-3 sm:-left-6 w-[52%] max-w-[180px] sm:max-w-[220px] aspect-square flex flex-col items-center justify-center z-10 drop-shadow-lg">
            <img src="/assets/images/bride-medallion.png" alt="" className="absolute inset-0 w-full h-full object-contain opacity-95" />
            <div className="relative z-10 flex flex-col items-center text-center mt-1">
              <span className="font-serif text-[clamp(0.9rem,3.5vw,1.4rem)] text-emerald-deep font-bold tracking-widest leading-none">
                ALEENA
              </span>
              <span className="font-sans text-[clamp(0.45rem,1.5vw,0.6rem)] text-gold-dark tracking-[0.3em] uppercase mt-1 sm:mt-1.5">
                Bride
              </span>
            </div>
          </div>

        </motion.div>

        {/* Typography */}
        <motion.div variants={fadeInVariant} className="flex flex-col items-center text-center mt-4">
          <h2 className="font-serif text-[3.5rem] sm:text-7xl font-bold text-gold-dark tracking-tight uppercase leading-none drop-shadow-sm">
            {groom.firstName}
          </h2>
          
          <div className="flex items-center justify-center gap-4 sm:gap-6 my-4 sm:my-6 opacity-90">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-antique/60" />
              <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold-antique" />
            </div>
            
            <span className="font-serif italic text-4xl sm:text-5xl text-gold-antique font-light">&amp;</span>
            
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold-antique" />
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-antique/60" />
            </div>
          </div>
          
          <h2 className="font-serif text-[3.5rem] sm:text-7xl font-bold text-gold-dark tracking-tight uppercase leading-none drop-shadow-sm">
            {bride.firstName}
          </h2>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default CoupleSection;
