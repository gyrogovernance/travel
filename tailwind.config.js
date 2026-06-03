/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        nav: "940px",
      },
      colors: {
        ink: "#0c1524",
        slate2: "#16233a",
        ocean: "#08707e",
        oceanlight: "#17b5c7",
        sand: "#f6f2ea",
        cream: "#fffdf9",
        leaf: "#2f7d4c",
        sky: "#5cc2e6",
        skylight: "#a9e0f4",
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
        soft: "0 10px 40px -12px rgba(12, 21, 36, 0.15)",
        glow: "0 8px 30px -10px rgba(10, 125, 140, 0.4)",
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
      },
      transitionTimingFunction: {
        // One natural easing curve used everywhere for consistency.
        smooth: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) both",
        float: "float 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
