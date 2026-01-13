import type { Config } from "tailwindcss";

/**
 * Tailwind Configuration
 * Extends theme with Innoscribe palette and enables App Router paths.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        innoscribe: {
          blue: "#1E3A8A",
          slate: "#334155",
          white: "#FFFFFF",
          accent: "#3B82F6",
          muted: "#F1F5F9"
        }
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl: "12px"
      }
    }
  },
  plugins: []
};

export default config;