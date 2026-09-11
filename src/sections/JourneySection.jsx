import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { handleImageError } from '../utils/media';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp, fadeIn, getVariant } from '../config/animations';

export function JourneySection() {
  const shouldReduceMotion = useReducedMotion();
  const story = weddingData.story;
  const moments = story.moments || [];

  const fadeUpVariant = getVariant(fadeUp, shouldReduceMotion);
  const fadeInVariant = getVariant(fadeIn, shouldReduceMotion);

  if (moments.length === 0) return null;

  return (
    <section className="relative w-full bg-ivory-pure py-24 px-4 border-t border-gold-antique/10">
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20"
      >
        <motion.div variants={fadeInVariant}>
          <p className="font-sans text-xs tracking-[0.25em] text-gold-dark uppercase mb-2">
            {story.title}
          </p>
          <div className="w-12 h-[1px] bg-gold-antique mx-auto opacity-50" />
        </motion.div>
      </motion.div>

      <div className="max-w-3xl mx-auto flex flex-col gap-24 sm:gap-32 pb-24">
        {moments.map((moment, index) => {
          let layoutClass = '';
          let textClass = '';
          let photoWrapClass = 'w-full sm:w-1/2 flex justify-center mb-24 sm:mb-0';
          let contentWrapClass = 'w-full sm:w-1/2 flex flex-col px-4 sm:px-8 mt-4 sm:mt-0';

          if (index === 3) {
            // Moment 4: more intimate centered composition
            layoutClass = 'flex-col';
            textClass = 'items-center text-center mt-12 sm:mt-14';
            photoWrapClass = 'w-full flex justify-center mb-24 sm:mb-0';
            contentWrapClass = 'w-full max-w-xl mx-auto flex flex-col px-4';
          } else {
            // Moment 1: text left / photo right (photo is 2nd in DOM order for desktop if row-reverse)
            // index 0 -> photo right (row-reverse)
            // index 1 -> photo left (row)
            // index 2 -> photo right (row-reverse)
            const isPhotoRight = index % 2 === 0;
            layoutClass = isPhotoRight ? 'flex-col sm:flex-row-reverse' : 'flex-col sm:flex-row';
            textClass = isPhotoRight 
              ? 'items-center sm:items-end text-center sm:text-right' 
              : 'items-center sm:items-start text-center sm:text-left';
          }
          
          return (
            <motion.div 
              key={moment.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className={`flex ${layoutClass} items-center gap-6 sm:gap-16 w-full`}
            >
              {/* Photo */}
              <div className={photoWrapClass}>
                <div className={`relative w-[75%] sm:w-72 ${index === 3 ? 'sm:w-80' : ''} z-20 drop-shadow-xl`}>
                  <div className="relative w-full rounded-t-full rounded-b-md overflow-hidden border border-gold-antique/30">
                    <img 
                      src={moment.image} 
                      alt={moment.title}
                      onError={(e) => handleImageError(e, '/assets/images/couple-placeholder.svg')}
                      className="w-full h-auto block grayscale-[15%] sepia-[10%]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-ivory-warm/30 rounded-t-full rounded-b-md pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                  {/* Floral garland */}
                  <img 
                    src="/assets/images/floral-garland.png"
                    alt=""
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[80%] w-[115%] max-w-none pointer-events-none drop-shadow-md z-30"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${contentWrapClass} ${textClass}`}>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold-antique font-semibold mb-3 sm:mb-4">
                  {moment.label}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-emerald-deep mb-3 sm:mb-4 leading-tight">
                  {moment.title}
                </h3>
                {/* Elegant subtle divider */}
                <div className="w-10 h-[1px] bg-gold-antique/60 mb-5 sm:mb-6" />
                <p className={`font-sans text-[0.95rem] sm:text-base text-dark-text/75 leading-[1.85] ${index === 3 ? 'max-w-[340px]' : 'max-w-[280px] sm:max-w-[320px]'}`}>
                  {moment.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Gentle ending ornament */}
      <div className="flex justify-center mt-12 mb-8">
        <div className="w-2 h-2 rounded-full bg-gold-antique/40" />
      </div>

    </section>
  );
}

export default JourneySection;
