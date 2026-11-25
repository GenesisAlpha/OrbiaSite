import type { Config } from "tailwindcss";

/**
 * Identidade ORBIA: preto, pointilhado e pulsante.
 * Editorial, sem cara de IA: serifada nos títulos, monoespaçada nos rótulos.
 */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080808",
        surface: "#101010",
        "surface-elevated": "#161616",
        text: "#f2f0ec",
        "text-muted": "#9e9b94",
        border: "#2c2b29",
        accent: {
          50: "#1a1a19", 100: "#242321", 200: "#35332f", 300: "#55514a",
          400: "#8a8379", 500: "#b8b0a3", 600: "#e7e1d5", 700: "#f2ede3",
          800: "#f7f3ea", 900: "#fbf8f1", 950: "#fffdf8",
        },
        warn: "#d8a15a",
        pulse: "#d7ff3e",
      },
      fontFamily: {
        sans: ["var(--font-editorial)", "Georgia", "ui-serif", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.6)",
        md: "0 4px 14px rgba(0,0,0,0.55)",
        lg: "0 16px 40px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "orbia-pontos": "radial-gradient(circle, #3a3936 1px, transparent 1px)",
      },
      backgroundSize: {
        pontos: "18px 18px",
      },
      transitionTimingFunction: {
        "out-fast": "cubic-bezier(0.2, 0, 0, 1)",
        base: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "out-slow": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "orbia-pulso": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.78)" },
        },
      },
      animation: {
        "orbia-pulso": "orbia-pulso 2.4s ease-in-out infinite",
      },
    },
  },
} satisfies Config;
