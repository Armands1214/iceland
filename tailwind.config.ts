import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)']
      },
      boxShadow: { 'elevate': '0 24px 48px -24px rgba(0,0,0,0.35)' }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
export default config;
