/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom brand colors here later
        primary: {
          500: '#10b981', 
        }
      }
    },
  },
  plugins: [],
}