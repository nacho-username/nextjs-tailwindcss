/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('../public/images/macbook-pro-hero.png')",
      },
      colors: {
        'dark-grey': '#0F0F0F',
        'deep-purple': '#130A24',
        beige: '#F8F5F3',
      },
    },
  },
  plugins: [],
}
