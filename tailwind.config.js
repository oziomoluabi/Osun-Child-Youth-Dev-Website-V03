/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0A101C',
        'brand-dark-blue': '#0D1A26',
        'brand-light-blue': '#1A344D',
        'brand-teal': '#66F4E1',
        'brand-cyan': '#7DFDFE',
        'brand-gray': '#8892B0',
        'brand-light-gray': '#CCD6F6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 2px #66F4E1, 0 0 5px #66F4E1' },
          '50%': { boxShadow: '0 0 10px #66F4E1, 0 0 15px #66F4E1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'pulse-glow': 'pulse-glow 3s infinite ease-in-out',
      },
      backgroundImage: {
        'dotted-matrix': `radial-gradient(circle at 1px 1px, rgba(136, 146, 176, 0.1) 1px, transparent 0)`,
      },
      backgroundSize: {
        'dotted-matrix': '15px 15px',
      },
    },
  },
  plugins: [],
};
