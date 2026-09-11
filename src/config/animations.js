/**
 * Centralized E-Card Animation Variants & Motion Utilities
 */

export const cardTransition = {
  hidden: { opacity: 0, scale: 0.94, y: 25 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.94, 
    y: -25, 
    transition: { duration: 0.55, ease: [0.32, 0, 0.67, 0] } 
  },
};

export const veilOpening = {
  closed: { opacity: 1, scale: 1 },
  open: { 
    opacity: 0, 
    scale: 1.06, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.55, ease: 'easeOut' } 
  },
};

export function getVariant(variant, shouldReduceMotion) {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 1, y: 0, scale: 1 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0 } },
      exit: { opacity: 0, transition: { duration: 0 } },
    };
  }
  return variant;
}

export default {
  cardTransition,
  veilOpening,
  fadeUp,
  fadeIn,
  getVariant,
};
