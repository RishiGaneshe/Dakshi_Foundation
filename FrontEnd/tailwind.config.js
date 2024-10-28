/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backdropBlur: {
        md: '5px', // Adjust the blur value as needed
      },
    },
  },
  plugins: [],
};
