import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function RsvpSection() {
  const shouldReduceMotion = useReducedMotion();
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    attendance: '', // 'attending' | 'declined'
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const setAttendance = (status) => {
    setFormData(prev => ({ ...prev, attendance: status }));
    if (errors.attendance) {
      setErrors(prev => ({ ...prev, attendance: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.attendance) newErrors.attendance = 'Please select your attendance status.';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Simulate successful submission locally
    setIsSubmitted(true);
  };

  // Stagger children animation
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative w-full min-h-[95svh] bg-ivory-warm py-24 sm:py-32 overflow-hidden flex flex-col justify-center items-center px-4">
      
      {/* Background Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-warm via-[#F2EBD9] to-ivory-warm z-0 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#C8A45D 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.25] mix-blend-overlay pointer-events-none z-0" />

      {/* Decorative Corners */}
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }} transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 opacity-50 z-10 pointer-events-none drop-shadow-sm mix-blend-multiply"
      >
        <img src="/assets/images/top-floral-corner.png" alt="" className="w-full h-full object-contain object-top-left" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} viewport={{ once: true }} transition={{ duration: 2 }}
        className="absolute bottom-0 right-0 w-40 sm:w-56 lg:w-80 opacity-40 z-10 pointer-events-none drop-shadow-sm mix-blend-multiply"
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
        className="relative z-20 w-full max-w-3xl mx-auto flex flex-col items-center text-center"
      >
        
        {/* Eyebrow */}
        <motion.div variants={itemVariant} className="mb-8">
          <h2 className="font-sans text-xs sm:text-sm tracking-[0.4em] text-gold-dark uppercase opacity-80">
            Kindly RSVP
          </h2>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariant} className="mb-6">
          <h1 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-emerald-deep leading-[1.2] drop-shadow-sm px-4">
            "We Would Love To Celebrate With You"
          </h1>
        </motion.div>

        {/* Supporting Line */}
        <motion.div variants={itemVariant} className="mb-14 sm:mb-16">
          <p className="font-sans text-xs sm:text-sm text-emerald-deep/70 tracking-widest uppercase max-w-md mx-auto leading-relaxed">
            Your presence will make this beautiful celebration even more special.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form 
              key="rsvp-form"
              variants={itemVariant}
              onSubmit={handleSubmit}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.6 } }}
              className="w-full max-w-lg flex flex-col items-center gap-8 sm:gap-10 px-4"
            >
              
              {/* Name Field */}
              <div className="w-full flex flex-col items-center">
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name" 
                  className={`w-full bg-transparent border-b ${errors.name ? 'border-red-400' : 'border-gold-antique/40'} text-center text-emerald-deep font-serif text-xl sm:text-2xl pb-3 focus:outline-none focus:border-gold-dark transition-colors placeholder:text-emerald-deep/40`}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <span className="font-sans text-[0.65rem] text-red-500 uppercase tracking-wider mt-2">{errors.name}</span>}
              </div>

              {/* Attendance Selection */}
              <div className="w-full flex flex-col items-center gap-4">
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <button
                    type="button"
                    onClick={() => setAttendance('attending')}
                    className={`flex-1 py-3.5 border text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 ease-in-out ${
                      formData.attendance === 'attending' 
                      ? 'border-emerald-deep bg-emerald-deep text-ivory-pure' 
                      : 'border-gold-antique/60 text-emerald-deep hover:border-emerald-deep/60 hover:bg-emerald-deep/5'
                    }`}
                  >
                    Joyfully Attending
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('declined')}
                    className={`flex-1 py-3.5 border text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 ease-in-out ${
                      formData.attendance === 'declined' 
                      ? 'border-emerald-deep bg-emerald-deep text-ivory-pure' 
                      : 'border-gold-antique/60 text-emerald-deep hover:border-emerald-deep/60 hover:bg-emerald-deep/5'
                    }`}
                  >
                    Unable to Attend
                  </button>
                </div>
                {errors.attendance && <span className="font-sans text-[0.65rem] text-red-500 uppercase tracking-wider mt-1">{errors.attendance}</span>}
              </div>



              {/* Optional Message */}
              <div className="w-full flex flex-col items-center mt-2">
                <label htmlFor="message" className="sr-only">Message for the couple</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Leave a little message for the couple..." 
                  rows="2"
                  className="w-full bg-transparent border-b border-gold-antique/40 text-center text-emerald-deep font-serif text-lg pb-2 focus:outline-none focus:border-gold-dark transition-colors placeholder:text-emerald-deep/40 resize-none overflow-hidden"
                />
              </div>

              {/* Ornamental Divider */}
              <div className="flex items-center gap-3 opacity-60 w-full justify-center my-2">
                <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-antique" />
                <div className="w-1.5 h-1.5 rotate-45 bg-gold-antique" />
                <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-antique" />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="mt-2 w-full sm:w-auto px-12 py-4 border border-gold-antique/80 text-emerald-deep font-sans text-xs sm:text-sm tracking-[0.3em] uppercase hover:bg-gold-antique hover:text-ivory-pure transition-all duration-500 ease-in-out"
              >
                Confirm RSVP
              </button>

            </motion.form>
          ) : (
            <motion.div
              key="rsvp-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-lg flex flex-col items-center justify-center py-12 px-4"
            >
              <div className="w-12 h-12 mb-8 opacity-80 mix-blend-multiply">
                <img src="/assets/images/corner-ornament.png" alt="" className="w-full h-full object-contain transform rotate-45" />
              </div>
              <h3 className="font-serif italic text-4xl sm:text-5xl text-emerald-deep mb-6">
                Thank You
              </h3>
              <p className="font-sans text-xs sm:text-sm tracking-[0.2em] text-gold-dark uppercase leading-loose max-w-sm">
                Your response has been received with love.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
      </motion.div>
    </section>
  );
}

export default RsvpSection;
