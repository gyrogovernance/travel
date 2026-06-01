/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d1b2a",
        slate2: "#1b263b",
        ocean: "#0a6e7c",
        oceanlight: "#13a3b5",
        sand: "#f4efe6",
        leaf: "#3f8f5b",
        amber2: "#d98c2b",
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1140px",
      },
    },
  },
  plugins: [],
};
