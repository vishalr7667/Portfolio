/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: '#080D1A',
        foreground: '#D1D5DB',
        card: {
          DEFAULT: '#111827',
          foreground: '#D1D5DB'
        },
        popover: {
          DEFAULT: '#111827',
          foreground: '#D1D5DB'
        },
        primary: {
          DEFAULT: '#4F8EF7',
          foreground: '#F1F5F9'
        },
        secondary: {
          DEFAULT: '#38BDF8',
          foreground: '#080D1A'
        },
        muted: {
          DEFAULT: '#1E2D4A',
          foreground: '#D1D5DB'
        },
        accent: {
          DEFAULT: '#1E2D4A',
          foreground: '#F1F5F9'
        },
        border: '#1E2D4A',
        input: '#1E2D4A',
        ring: '#4F8EF7',
        blueAccent: '#4F8EF7',
        tealAccent: '#38BDF8',
        bodyText: '#D1D5DB',
        headingsText: '#F1F5F9',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.2)',
        DEFAULT: '0 2px 12px rgba(0,0,0,0.3)',
        md: '0 2px 12px rgba(0,0,0,0.3)',
        lg: '0 2px 12px rgba(0,0,0,0.3)',
        xl: '0 2px 12px rgba(0,0,0,0.3)',
        '2xl': '0 2px 12px rgba(0,0,0,0.3)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
