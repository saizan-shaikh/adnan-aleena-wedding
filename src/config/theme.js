/**
 * Centralized Design Token System & Theme Configuration
 * Royal Luxury Muslim Wedding Theme Tokens
 */

export const themeConfig = {
  colors: {
    emerald: {
      deep: '#0B3D35',
      light: '#13584D',
      subtle: '#062621',
    },
    gold: {
      antique: '#C8A45D',
      light: '#E5C989',
      dark: '#9E7C39',
      subtle: 'rgba(200, 164, 93, 0.15)',
    },
    ivory: {
      warm: '#F8F3E7',
      pure: '#FFFFFF',
      muted: '#EFE8D8',
    },
    dark: {
      text: '#17211F',
      heading: '#0B1715',
      muted: '#4A5754',
    },
  },

  typography: {
    fontFamily: {
      heading: "'Cormorant Garamond', Georgia, serif",
      body: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
    },
  },

  radii: {
    none: '0px',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },

  shadows: {
    goldGlow: '0 4px 20px -2px rgba(200, 164, 93, 0.35)',
    emeraldSoft: '0 10px 30px -5px rgba(11, 61, 53, 0.25)',
    cardElevated: '0 8px 32px 0 rgba(23, 33, 31, 0.08)',
  },

  spacing: {
    sectionMobile: '3rem 1.25rem',
    sectionTablet: '4.5rem 2.5rem',
    sectionDesktop: '6rem 4rem',
    containerMaxWidth: '1280px',
  },
};

export default themeConfig;
