/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      bgColor: {
        'spec-white': '#dadada',
        'dark-bg': '#202020',
        'light-bg': '#D9D9D9',
      },
    },
  },
  plugins: [],
}
