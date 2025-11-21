/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#22D3EE',       // Neon cyan accent
        secondary: '#64748B',     // Cool gray
        accent: '#4A90E2',        // Muted blue
        background: '#0F172A',    // Dark navy background
      },
      fontFamily: {
        sans: ['Open Sans', 'Lato', 'sans-serif'],  // Clean sans serif for body
        serif: ['Playfair Display', 'serif'],       // Elegant serif for headings
      },
    },
  },
  plugins: [],
}
