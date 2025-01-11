/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Global font
        pixelify: ['Pixelify Sans', 'serif'], // Specific-use font
        kaushan: ['Kaushan Script', 'serif'], // Specific-use font
      },
    },
  },
  safelist: [
    'bg-red-200',
    'bg-blue-200',
    'bg-green-200',
    'bg-purple-200',
    'bg-red-400',
    'bg-indigo-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-purple-400',
    'bg-pink-400',
    'bg-cyan-400',
    'bg-orange-400',
    'text-red-400',
    'text-indigo-400',
    'text-blue-400',
    'text-green-400',
    'text-purple-400',
    'text-pink-400',
    'text-cyan-400',
    'text-orange-400',
  ],
  plugins: [],
};
