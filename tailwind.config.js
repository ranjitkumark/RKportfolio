/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translateY(6px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        shakeVertical: {
          "0%, 100%": { transform: "translateY(0)" },
          "10%, 30%, 50%, 70%": { transform: "translateY(-8px)" },
          "20%, 40%, 60%": { transform: "translateY(8px)" },
          "80%": { transform: "translateY(6.4px)" },
          "90%": { transform: "translateY(-6.4px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.35s ease",
        shakeVertical: "shakeVertical 20s cubic-bezier(0.455, 0.030, 0.515, 0.955) both infinite",
      },
    },
  },
  plugins: [],
};
