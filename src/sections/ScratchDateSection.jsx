import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp, fadeIn, getVariant } from '../config/animations';

export function ScratchDateSection() {
  const shouldReduceMotion = useReducedMotion();
  const schedule = weddingData.schedule;

  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  const fadeUpVariant = getVariant(fadeUp, shouldReduceMotion);
  const fadeInVariant = getVariant(fadeIn, shouldReduceMotion);

  // Pure heart mask SVG encoded for CSS mask-image
  const heartMaskUrl = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>')`;

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set internal resolution strictly
    canvas.width = 500;
    canvas.height = 500;

    // Fill with elegant muted gold background
    ctx.fillStyle = '#C8A45D';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add subtle scratch pattern/texture
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i < 400; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 2,
        0,
        2 * Math.PI
      );
      ctx.fill();
    }
    
    // Add instruction text on the canvas itself (before scratching)
    ctx.fillStyle = '#0B3D35';
    ctx.font = 'italic 16px "Cormorant Garamond", serif';
    ctx.textAlign = 'center';
    ctx.fillText('Scratch to Reveal', canvas.width / 2, canvas.height / 2);
  }, []);

  const getPosition = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    // Calculate scaling because actual display size might differ from internal 300x300
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const handleStart = (e) => {
    if (isRevealed) return;
    setIsDrawing(true);
    scratch(e);
    
    // Prevent scrolling while scratching
    if (e.type === 'touchstart') {
      document.body.style.overflow = 'hidden';
    }
  };

  const handleMove = (e) => {
    if (!isDrawing || isRevealed) return;
    // Don't call e.preventDefault() here as it can block scrolling passively.
    // Instead we rely on CSS touch-action: none on the canvas itself.
    scratch(e);
  };

  const handleEnd = () => {
    setIsDrawing(false);
    document.body.style.overflow = 'auto'; // Restore scroll
    checkReveal();
  };

  const scratch = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getPosition(e);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  };

  const checkReveal = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentCount = 0;
    
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] < 10) transparentCount++;
    }
    
    const totalPixels = pixels.length / 4;
    const percentCleared = (transparentCount / totalPixels) * 100;

    // The heart mask means a lot of pixels are outside the heart. 
    // We adjust the threshold down to ensure it reveals correctly.
    if (percentCleared > 35) {
      setIsRevealed(true);
      // Optional: Auto-clear the rest smoothly via CSS opacity
    }
  };

  return (
    <section className="relative w-full min-h-[80svh] flex flex-col justify-center items-center bg-ivory-warm py-20 px-4 ecard-paper-bg">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col items-center w-full max-w-md mx-auto"
      >
        
        <motion.div variants={fadeInVariant} className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.25em] text-gold-dark uppercase mb-2">
            The Date
          </p>
          <div className="w-12 h-[1px] bg-gold-antique mx-auto opacity-50" />
        </motion.div>

        {/* Masked Heart Container */}
        <motion.div variants={fadeUpVariant} className="relative flex justify-center items-center w-full">
          
          <div 
            ref={containerRef}
            className="relative w-[92vw] max-w-[400px] sm:max-w-[460px] md:max-w-[520px] aspect-square flex justify-center items-center overflow-hidden drop-shadow-2xl mx-auto"
            style={{ 
              WebkitMaskImage: heartMaskUrl, 
              maskImage: heartMaskUrl,
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center'
            }}
          >
            {/* The Hidden Date Content (Underneath) */}
            <div className="absolute inset-0 bg-ivory-pure flex flex-col items-center justify-center text-center px-[15%] pt-[15%] pb-[18%]">
              <span className="font-sans text-[clamp(0.55rem,2vw,0.75rem)] uppercase tracking-[0.3em] text-gold-dark mb-1.5 sm:mb-2">
                {schedule.dayOfWeek}
              </span>
              <h2 className="font-serif text-[clamp(1.25rem,5vw,2rem)] text-emerald-deep font-bold mb-2 sm:mb-3 leading-none flex flex-col items-center gap-1">
                {schedule.dateFormatted.split(' ').map((part, i) => (
                  <span key={i} className={i === 1 ? 'text-[clamp(1.6rem,6.5vw,2.8rem)] tracking-tight leading-none' : 'tracking-widest'}>
                    {part}
                  </span>
                ))}
              </h2>
              <div className="w-8 sm:w-10 h-[1px] bg-gold-antique/60 mb-2 sm:mb-3" />
              <p className="font-serif italic text-[clamp(0.9rem,3vw,1.25rem)] text-emerald-deep mb-1 sm:mb-1.5 leading-none">
                {schedule.timeFormatted}
              </p>
              <p className="font-sans text-[clamp(0.5rem,1.8vw,0.65rem)] tracking-[0.2em] uppercase text-dark-text/60 leading-none">
                {schedule.hijriDate}
              </p>
            </div>

            {/* The Scratchable Canvas Layer */}
            <canvas
              ref={canvasRef}
              className={`absolute inset-0 z-10 touch-none cursor-crosshair transition-opacity duration-1000 ${isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
              onTouchCancel={handleEnd}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

        </motion.div>

        {/* Instructional Text */}
        <motion.div variants={fadeInVariant} className="mt-12 text-center opacity-70">
          <p className="font-sans text-xs uppercase tracking-widest text-emerald-deep">
            {isRevealed ? "The date is set" : "Discover our date"}
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default ScratchDateSection;
