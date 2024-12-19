/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1e293b", // Dark blue-gray
        secondary: "#94a3b8", // Muted slate
        tertiary: "#334155", // Medium blue-gray
        "black-100": "#1f2937", // Charcoal
        "black-200": "#111827", // Dark charcoal
        "white-100": "#e2e8f0", // Light slate
        glow: "#10ffcb",
      },
      boxShadow: {
        card: "0px 30px 100px -10px rgba(31, 41, 55, 0.8)", // Softer shadow
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
