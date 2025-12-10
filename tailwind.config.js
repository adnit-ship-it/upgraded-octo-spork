import designTokens from './data/designTokens.json'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Dynamic colors from CSS custom properties (set by branding API)
        backgroundColor: '#A19368',
        bodyColor: '#000000',
        accentColor1: {
          DEFAULT: '#C85B7A',
          50: 'color-mix(in srgb, #750021 50%, transparent)',
        },
        accentColor2: '#6C5159',
      },
      fontFamily: {
        // Fonts automatically loaded from designTokens.json
        headingFont: [designTokens.fonts.heading, "sans-serif"],
        bodyFont: [designTokens.fonts.body, "sans-serif"],
        defaultSerif: [designTokens.fonts.serif, "serif"],
      },
    },
  },
  plugins: [],
};
