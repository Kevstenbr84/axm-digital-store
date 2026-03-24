/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium dark palette
        background: '#0C0C0E',
        surface: '#16161A',
        'surface-elevated': '#1E1E24',
        'surface-highest': '#25252D',
        
        // Premium accents
        primary: '#E8E4D9',      // Warm ivory
        secondary: '#9A9590',    // Sophisticated gray
        accent: '#C4A77D',       // Champagne gold
        'accent-hover': '#D4B88D',
        
        // Functional colors
        success: '#4A7C59',
        error: '#B54A4A',
        warning: '#C9A227',
        
        // Border and divider
        border: 'rgba(232, 228, 217, 0.08)',
        'border-hover': 'rgba(232, 228, 217, 0.15)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}