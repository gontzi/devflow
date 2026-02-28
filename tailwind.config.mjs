/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        refuge: {
          bg: '#F9F7F2',
          surface: '#F1F0EA',
          text: '#6B6B6B',
          muted: '#A0A0A0',
          accent: '#A1A892', // Sage green mate
          dark: '#2D2D2D',
        }
      },
      backgroundImage: {
        'refuge-gradient': 'linear-gradient(180deg, #F9F7F2 0%, #F1F0EA 100%)',
      },
      borderRadius: {
        'refuge': '1.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

