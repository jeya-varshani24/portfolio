/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366F1", // Indigo
          glow: "rgba(99, 102, 241, 0.15)",
        },
        secondary: {
          DEFAULT: "#8B5CF6", // Purple
          glow: "rgba(139, 92, 246, 0.15)",
        },
        accent: {
          DEFAULT: "#06B6D4", // Cyan
          glow: "rgba(6, 182, 212, 0.15)",
        },
        darkBg: "#0F172A", // Slate 900
        cardBg: "rgba(30, 41, 59, 0.45)",
        borderLight: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
