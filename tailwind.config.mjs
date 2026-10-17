/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palet "calm coach directory" — krem hangat, tint sage, ink kehijauan, satu accent rust.
        paper: '#F2EFE4',
        'paper-2': '#C0C7A4',
        ink: '#1D3029',
        forest: '#244B3E',
        accent: '#7c3c28',
      },
      fontFamily: {
        display: ['"Libre Baskerville"', 'Georgia', 'ui-serif', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
