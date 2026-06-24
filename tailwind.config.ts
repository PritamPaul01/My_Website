import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Maroon-tinted near-black canvas (cinematic crimson cyberpunk)
        ink: {
          DEFAULT: '#0a0607',
          900: '#050304',
          800: '#170a0c',
          700: '#210d10',
          600: '#2c1115',
        },
        // NOTE: 'violet' is a legacy token key — its values are now the
        // primary CRIMSON / BLOOD-RED so the whole site re-themes without
        // renaming hundreds of utility classes.
        violet: {
          300: '#ff7d86',
          400: '#f5384a',
          500: '#e01e30',
          600: '#b3151f',
          700: '#8c0f18',
        },
        // Secondary — hot coral / ember red
        accent: {
          DEFAULT: '#ff4a3d',
          500: '#ff2d3a',
        },
        paper: '#f6efec',
        muted: '#a99c9c',
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '1280px',
        },
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wheel: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '80%,100%': { transform: 'translateY(11px)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        wheel: 'wheel 1.5s infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
