/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        heading: "rgb(var(--c-heading) / <alpha-value>)",
        body: "rgb(var(--c-body) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        accent: "rgb(var(--c-accent) / <alpha-value>)",
        navy: "rgb(var(--c-navy) / <alpha-value>)",
        live: "rgb(var(--c-live) / <alpha-value>)",
        card: "rgb(var(--c-card) / <alpha-value>)",
        mint: "rgb(var(--c-mint) / <alpha-value>)",
        band: "rgb(var(--c-band) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
        poppins: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
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
