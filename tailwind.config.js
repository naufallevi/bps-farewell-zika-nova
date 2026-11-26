/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'serif'],
      },
      colors: {
        bps: {
          blue: 'var(--color-blue)',
          navy: 'var(--color-navy)',
          orange: 'var(--color-orange)',
          green: 'var(--color-green)',
          cream: 'var(--color-cream)',
        },
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(10,37,64,0.25)',
        glow: '0 0 60px -10px var(--color-orange)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        grain: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-2%, 1%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 6s linear infinite',
        grain: 'grain 8s steps(4) infinite',
      },
    },
  },
  plugins: [],
};