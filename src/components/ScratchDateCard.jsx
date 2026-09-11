import React, { useRef, useEffect, useState, useCallback } from 'react';
import { weddingData } from '../data/wedding';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function ScratchDateCard({ onRevealComplete }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isPointerDownRef = useRef(false);

  const [isRevealed, setIsRevealed] = useState(false);
  const [revealPercent, setRevealPercent] = useState(0);

  const shouldReduceMotion = useReducedMotion();
  const schedule = weddingData.schedule;

  // Render the metallic gold scratch coating on the canvas
  const drawSurface = useCallback((ctx, width, height) => {
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';

    // Rich Metallic Foil Gold Gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#F3E5AB');
    gradient.addColorStop(0.35, '#D4AF37');
    gradient.addColorStop(0.7, '#C8A45D');
    gradient.addColorStop(1, '#8C6D2B');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Decorative Islamic Arch Inner Border
    ctx.strokeStyle = 'rgba(11, 61, 53, 0.35)';
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    ctx.strokeStyle = 'rgba(248, 243, 231, 0.5)';
    ctx.lineWidth = 1;
    ctx.strokeRect(14, 14, width - 28, height - 28);

    // Corner Filigree Dots
    ctx.fillStyle = '#0B3D35';
    ctx.beginPath();
    ctx.arc(20, 20, 3, 0, Math.PI * 2);
    ctx.arc(width - 20, 20, 3, 0, Math.PI * 2);
    ctx.arc(20, height - 20, 3, 0, Math.PI * 2);
    ctx.arc(width - 20, height - 20, 3, 0, Math.PI * 2);
    ctx.fill();

    // Scratch Instruction Text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillStyle = '#0B3D35';
    ctx.font = `600 ${Math.max(11, Math.min(14, width / 24))}px 'Plus Jakarta Sans', sans-serif`;
    ctx.fillText('✧ OUR SPECIAL DAY ✧', width / 2, height / 2 - 20);

    ctx.font = `700 ${Math.max(16, Math.min(22, width / 14))}px 'Cormorant Garamond', Georgia, serif`;
    ctx.fillText('SCRATCH TO REVEAL DATE', width / 2, height / 2 + 8);

    ctx.fillStyle = '#062621';
    ctx.font = `500 ${Math.max(10, Math.min(12, width / 28))}px 'Plus Jakarta Sans', sans-serif`;
    ctx.fillText('(Swipe or drag with finger / mouse)', width / 2, height / 2 + 32);

    ctx.restore();
  }, []);

  // High-DPI canvas setup
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    if (width === 0 || height === 0) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    if (!isRevealed) {
      drawSurface(ctx, width, height);
    }
  }, [drawSurface, isRevealed]);

  useEffect(() => {
    initCanvas();
    window.addEventListener('resize', initCanvas);
    return () => window.removeEventListener('resize', initCanvas);
  }, [initCanvas]);

  // Calculate reveal percentage by sampling a 20x20 grid
  const checkRevealPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    if (width === 0 || height === 0) return;

    const sampleGridSize = 20;
    const stepX = Math.floor(width / sampleGridSize);
    const stepY = Math.floor(height / sampleGridSize);

    let transparentSamples = 0;
    const totalSamples = sampleGridSize * sampleGridSize;

    try {
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let y = 0; y < sampleGridSize; y++) {
        for (let x = 0; x < sampleGridSize; x++) {
          const pixelX = x * stepX + Math.floor(stepX / 2);
          const pixelY = y * stepY + Math.floor(stepY / 2);
          const index = (pixelY * width + pixelX) * 4 + 3; // Alpha channel

          if (data[index] < 128) {
            transparentSamples++;
          }
        }
      }

      const percent = Math.round((transparentSamples / totalSamples) * 100);
      setRevealPercent(percent);

      // Auto-complete at 45% threshold
      if (percent >= 45) {
        setIsRevealed(true);
        if (onRevealComplete) onRevealComplete();
      }
    } catch (e) {
      // Fallback
    }
  }, [isRevealed, onRevealComplete]);

  // Scratch action using Pointer Events
  const scratchAtPoint = useCallback((clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientY ? clientX - rect.left : 0;
    const y = clientY ? clientY - rect.top : 0;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 24 * dpr, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    checkRevealPercentage();
  }, [checkRevealPercentage, isRevealed]);

  const handlePointerDown = (e) => {
    if (isRevealed) return;
    isPointerDownRef.current = true;
    scratchAtPoint(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (!isPointerDownRef.current || isRevealed) return;
    scratchAtPoint(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    isPointerDownRef.current = false;
  };

  // Instant Accessible Reveal Fallback Action
  const triggerAccessibleReveal = () => {
    setIsRevealed(true);
    setRevealPercent(100);
    if (onRevealComplete) onRevealComplete();
  };

  return (
    <div className="w-full max-w-md mx-auto my-4 sm:my-6 px-2">
      {/* Outer Plaque Card Container */}
      <div 
        ref={containerRef}
        className="relative min-h-[195px] rounded-2xl bg-ivory-pure/95 backdrop-blur-md border-2 border-gold-antique/70 shadow-2xl overflow-hidden p-6 text-center flex flex-col justify-center items-center gold-glow-lg"
      >
        {/* Inner Gold Filigree Line Accent */}
        <div className="absolute inset-1.5 rounded-xl border border-gold-antique/30 pointer-events-none" />

        {/* Revealed Content (Accessible DOM Nodes) */}
        <div 
          className="w-full space-y-2 select-none z-0"
          aria-live="polite"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-gold-dark font-semibold">
            {schedule.dayOfWeek}
          </p>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep tracking-wider">
            {schedule.dateFormatted}
          </h3>
          <div className="gold-divider max-w-[150px] mx-auto my-2" />
          <p className="font-sans text-base sm:text-lg font-semibold text-dark-text">
            {schedule.timeFormatted}
          </p>
          <p className="text-xs text-dark-muted font-serif italic">
            {schedule.hijriDate}
          </p>
        </div>

        {/* Scratch Canvas Overlay */}
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`absolute inset-0 touch-none cursor-pointer z-10 transition-opacity duration-700 ${
            isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          aria-hidden="true"
        />
      </div>

      {/* Accessible Reveal Fallback Control */}
      {!isRevealed && (
        <div className="mt-2 text-center">
          <button
            type="button"
            onClick={triggerAccessibleReveal}
            className="text-xs text-gold-dark hover:text-emerald-deep underline underline-offset-4 focus-visible:outline-none transition-colors font-medium"
          >
            Tap to reveal date (Accessible Mode)
          </button>
        </div>
      )}
    </div>
  );
}

export default ScratchDateCard;
