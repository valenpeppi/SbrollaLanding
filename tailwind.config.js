/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sbrolla: {
          teal: '#0D9488',
          'teal-light': '#2DD4BF',
          'teal-glow': 'rgba(13, 148, 136, 0.3)',
          coral: '#F07878',
          'coral-light': '#F87171',
          'coral-glow': 'rgba(240, 120, 120, 0.3)',
          dark: '#09090B',
          surface: '#18181B',
          card: '#27272A',
        }
      },
      boxShadow: {
        'glow-teal': '0 0 25px -5px rgba(45, 212, 191, 0.35)',
        'glow-teal-lg': '0 0 45px 0px rgba(45, 212, 191, 0.45)',
        'glow-coral': '0 0 25px -5px rgba(240, 120, 120, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(45,212,191,0.4)' },
          '50%': { opacity: 0.7, boxShadow: '0 0 10px rgba(45,212,191,0.15)' }
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}
