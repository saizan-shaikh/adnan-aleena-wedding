import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function VenueSection() {
  const shouldReduceMotion = useReducedMotion();
  const venue = weddingData.venue;

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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Generate Google Maps URLs dynamically if not explicitly provided
  const query = venue.googleMapsQuery 
    ? encodeURIComponent(venue.googleMapsQuery) 
    : encodeURIComponent(`${venue.name}, ${venue.fullAddress}`);
  
  const mapsEmbedUrl = venue.googleMapsEmbedUrl || `https://maps.google.com/maps?q=${query}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  const mapsDestinationUrl = venue.mapsUrl || `https://maps.google.com/maps?q=${query}`;

  return (
    <section className="relative w-full min-h-[100svh] bg-ivory-warm py-24 sm:py-32 overflow-hidden flex flex-col justify-center">
      
      {/* Background Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory-warm via-[#F2EBD9]/60 to-ivory-warm z-0 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#C8A45D 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.25] mix-blend-overlay pointer-events-none z-0" />

      {/* Decorative Corners */}
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }} transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-32 sm:w-48 opacity-60 z-10 pointer-events-none drop-shadow-md mix-blend-multiply"
      >
        <img src="/assets/images/top-floral-corner.png" alt="" className="w-full h-full object-contain object-top-left" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }} transition={{ duration: 2 }}
        className="absolute bottom-0 right-0 w-40 sm:w-56 opacity-50 z-10 pointer-events-none drop-shadow-md mix-blend-multiply"
        style={{ transform: 'scaleX(-1)' }}
      >
        <img src="/assets/images/bottom-floral-guldasta.png" alt="" className="w-full h-full object-contain object-bottom-left" />
      </motion.div>

      <motion.div 
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
        className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24"
      >
        
        {/* Left: Premium Map Composition (Architectural Framing) */}
        <motion.div variants={itemVariant} className="w-full max-w-md lg:w-1/2 flex justify-center">
          <div className="relative w-full aspect-[4/5] bg-emerald-deep p-2 sm:p-3 shadow-[0_30px_60px_-15px_rgba(11,61,53,0.3)] rounded-t-[12rem] rounded-b-md overflow-hidden group">
            
            {/* Subtle inner gold border */}
            <div className="absolute inset-2 sm:inset-3 border border-gold-antique/50 z-20 pointer-events-none rounded-t-[11.5rem] rounded-b-sm" />
            
            {/* Inner Content / Maps Embed */}
            <div className="relative w-full h-full bg-[#0A362E] rounded-t-[11rem] rounded-b-sm overflow-hidden flex flex-col items-center justify-center">
              
              <iframe
                title="Venue Location Map"
                src={mapsEmbedUrl}
                className="absolute inset-0 w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 ease-in-out"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
              
              {/* Emerald Tint Overlay to blend the map into the theme initially */}
              <div className="absolute inset-0 bg-emerald-deep/20 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-700 z-10" />
            </div>

            {/* Bottom Floral Embellishment on the frame */}
            <div className="absolute -bottom-12 -left-12 w-48 sm:w-64 opacity-90 z-30 pointer-events-none drop-shadow-xl mix-blend-screen brightness-0 invert sepia-[0.3]">
              <img src="/assets/images/bottom-floral-guldasta.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Right: Venue Information */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Eyebrow */}
          <motion.div variants={itemVariant} className="mb-8">
            <h2 className="font-sans text-xs sm:text-sm tracking-[0.4em] text-gold-dark uppercase opacity-80">
              The Venue
            </h2>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariant} className="mb-12">
            <h1 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-emerald-deep leading-[1.2] drop-shadow-sm max-w-lg">
              "A Place Where Our Forever Begins"
            </h1>
          </motion.div>

          <motion.div variants={itemVariant} className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-antique to-transparent lg:from-gold-antique lg:via-gold-antique lg:to-transparent mb-12 opacity-60" />

          {/* Venue Info Block */}
          <motion.div variants={itemVariant} className="flex flex-col items-center lg:items-start mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl text-emerald-deep tracking-wider mb-4 whitespace-pre-line text-center lg:text-left leading-snug">
              {venue.name}
            </h3>
            <p className="font-sans text-sm sm:text-base text-dark-text/80 leading-relaxed max-w-sm whitespace-pre-line text-center lg:text-left">
              {venue.fullAddress}
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.div variants={itemVariant} className="mb-10">
            <a 
              href={mapsDestinationUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-gold-antique/60 text-emerald-deep font-sans text-xs sm:text-sm tracking-[0.3em] uppercase hover:bg-gold-antique hover:text-ivory-pure transition-all duration-300 ease-in-out"
            >
              View on Google Maps
            </a>
          </motion.div>

          {/* Optional Small Line */}
          <motion.div variants={itemVariant} className="mt-2">
            <p className="font-serif italic text-lg sm:text-xl text-emerald-deep/80">
              Join us as we begin this beautiful celebration together.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default VenueSection;
