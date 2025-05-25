/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // If you have a general components folder
  ],
  theme: {
    extend: {
      keyframes: {
        'draw-line-x': {
          '0%': { width: '0%', opacity: '0' },
          '50%': { width: '100%', opacity: '1' },
          '100%': { width: '100%', opacity: '1' }, 
        },
        'draw-line-y': {
          '0%': { height: '0%', opacity: '0' },
          '50%': { height: '100%', opacity: '1' },
          '100%': { height: '100%', opacity: '1' },
        },
        'border-trace-top': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'border-trace-right': {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        'border-trace-bottom': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'border-trace-left': {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
      },
      animation: {
        'border-trace-top': 'border-trace-top 0.25s ease-out forwards',
        'border-trace-right': 'border-trace-right 0.25s ease-out 0.25s forwards',
        'border-trace-bottom': 'border-trace-bottom 0.25s ease-out 0.5s forwards',
        'border-trace-left': 'border-trace-left 0.25s ease-out 0.75s forwards',
      },
    },
  },
  plugins: [],
}; 