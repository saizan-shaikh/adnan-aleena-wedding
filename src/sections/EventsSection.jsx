import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp, fadeIn, getVariant } from '../config/animations';

export function EventsSection() {
  const shouldReduceMotion = useReducedMotion();
  const events = weddingData.events || [];

  const fadeUpVariant = getVariant(fadeUp, shouldReduceMotion);
  const fadeInVariant = getVariant(fadeIn, shouldReduceMotion);

  if (events.length === 0) return null;

  return (
    <section className="relative w-full min-h-[80svh] flex flex-col justify-center items-center bg-emerald-deep text-ivory-warm py-24 px-4 sm:px-8">
      
      {/* Subtle overlay patterns for the dark section */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,164,93,0.1)_0%,_transparent_70%)] pointer-events-none" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col items-center w-full max-w-4xl mx-auto z-10"
      >
        <motion.div variants={fadeInVariant} className="mb-16 text-center">
          <p className="font-sans text-xs tracking-[0.25em] text-gold-antique uppercase mb-2">
            The Events
          </p>
          <div className="w-12 h-[1px] bg-gold-antique mx-auto opacity-50" />
        </motion.div>

        <div className="w-full flex flex-col md:flex-row gap-16 md:gap-8 justify-center items-start">
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              variants={fadeUpVariant}
              custom={index}
              className="flex-1 flex flex-col items-center text-center px-4 w-full"
            >
              <div className="w-10 h-10 border border-gold-antique/40 rotate-45 flex justify-center items-center mb-8">
                <div className="w-8 h-8 border border-gold-antique/20" />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-ivory-pure mb-2 font-medium">
                {event.title}
              </h3>
              
              <div className="h-[1px] w-16 bg-gold-antique/30 my-4" />

              <div className="space-y-4 font-sans text-sm tracking-wide text-ivory-warm/80 uppercase">
                <p>
                  <span className="block text-gold-antique mb-1">When</span>
                  {event.date}<br/>{event.time}
                </p>
                <p>
                  <span className="block text-gold-antique mb-1">Where</span>
                  {event.venueName}<br/>
                  <span className="text-xs opacity-75 capitalize tracking-normal">{event.address}</span>
                </p>
                {event.dressCode && (
                  <p>
                    <span className="block text-gold-antique mb-1">Attire</span>
                    <span className="text-xs capitalize tracking-normal">{event.dressCode}</span>
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default EventsSection;
