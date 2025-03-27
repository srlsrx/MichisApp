export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "50%": { opacity: "0", transform: "scale(0.75)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
