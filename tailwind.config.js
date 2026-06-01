/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c1524",
        slate2: "#16233a",
        ocean: "#08707e",
        oceanlight: "#17b5c7",
        sand: "#f6f2ea",
        cream: "#fffdf9",
        leaf: "#2f7d4c",
        amber2: "#f0a92b",
        coral: "#ff6b5e",
      },
      fontFamily: {
        display: ["Caprasimo", "Georgia", "serif"],
        sans: ["Nunito", "system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      height: {
        18: "4.5rem",
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(12, 21, 36, 0.18)",
        glow: "0 8px 30px -8px rgba(10, 125, 140, 0.45)",
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
