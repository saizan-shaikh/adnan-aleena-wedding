import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp, fadeIn, scaleUp, getVariant } from '../config/animations';

export function InvitationSection() {
  const shouldReduceMotion = useReducedMotion();
  const couple = weddingData.couple;
  const family = weddingData.family;
  const schedule = weddingData.schedule;
  const sections = weddingData.sections;

  if (!sections || !sections.showInvitation) {
    return null;
  }

  const fadeUpVariant = getVariant(fadeUp, shouldReduceMotion);
  const fadeInVariant = getVariant(fadeIn, shouldReduceMotion);
  const scaleUpVariant = getVariant(scaleUp, shouldReduceMotion);

  return (
    <section 
      id="invitation" 
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ivory-warm text-dark-text overflow-hidden bg-pattern-subtle border-t gold-border"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gold-antique/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full mx-auto text-center">
        
        {/* Main Formal Invitation Card Container */}
        <motion.div 
          variants={scaleUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative bg-ivory-pure/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-gold-antique/70 shadow-2xl gold-glow-lg space-y-8 overflow-hidden"
        >
          {/* Inner Decorative Gold Frame Line */}
          <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-gold-antique/40 pointer-events-none" />

          {/* Corner Filigree Ornaments */}
          <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-gold-antique/80" />
          <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gold-antique/80" />
          <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-gold-antique/80" />
          <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-gold-antique/80" />

          {/* 1. Header Monogram Emblem */}
          <motion.div variants={fadeInVariant} className="space-y-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-emerald-deep text-gold-antique flex items-center justify-center font-serif text-xl sm:text-2xl font-bold border-2 border-gold-antique shadow-md">
              {couple.monogram}
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold">
              {couple.mainHeading}
            </p>
          </motion.div>

          <div className="gold-divider max-w-[180px] mx-auto opacity-70" />

          {/* 2. Host Families Announcement */}
          <motion.div variants={fadeUpVariant} className="space-y-4">
            <p className="font-serif italic text-lg sm:text-xl text-dark-muted">
              Together with their families
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto py-2">
              <div className="p-4 rounded-xl bg-ivory-warm/80 border border-gold-antique/30">
                <p className="text-xs uppercase tracking-wider text-gold-dark font-semibold mb-1">Groom's Parents</p>
                <p className="font-serif text-lg font-bold text-emerald-deep">{family.groomParents}</p>
              </div>
              <div className="p-4 rounded-xl bg-ivory-warm/80 border border-gold-antique/30">
                <p className="text-xs uppercase tracking-wider text-gold-dark font-semibold mb-1">Bride's Parents</p>
                <p className="font-serif text-lg font-bold text-emerald-deep">{family.brideParents}</p>
              </div>
            </div>

            <p className="font-sans text-base sm:text-lg text-dark-text max-w-lg mx-auto leading-relaxed pt-2">
              Cordially invite you to celebrate the wedding ceremony of their beloved children
            </p>
          </motion.div>

          {/* 3. Couple Names Centerpiece */}
          <motion.div variants={fadeUpVariant} className="py-2">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-deep tracking-tight">
              {weddingData.groom.fullName}
            </h2>
            <p className="font-serif italic text-3xl sm:text-4xl text-gold-antique my-2">&amp;</p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-deep tracking-tight">
              {weddingData.bride.fullName}
            </h2>
          </motion.div>

          <div className="gold-divider max-w-[180px] mx-auto opacity-70" />

          {/* 4. Date & Hijri Blessings */}
          <motion.div variants={fadeInVariant} className="space-y-2">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-emerald-deep tracking-wider">
              {schedule.fullDateDisplay}
            </p>
            <p className="font-sans text-base text-gold-dark font-medium">
              {schedule.timeFormatted}
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-dark-muted">
              {schedule.hijriDate}
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default InvitationSection;
