/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Neo-Brutalism Pastel Palette
        'vinted': '#09B1BA',
        'cream': '#FFF8E7', 
        'pink-pastel': '#FFB3BA',
        'mint': '#B3F2DD',
        
        // Old colors for compatibility
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          dark: 'rgb(var(--primary-dark) / <alpha-value>)',
        },
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        success: 'rgb(var(--success) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
        error: 'rgb(var(--error) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          variant: 'rgb(var(--surface-variant) / <alpha-value>)',
        },
        border: 'rgb(var(--border) / <alpha-value>)',
        divider: 'rgb(var(--divider) / <alpha-value>)',
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          disabled: 'rgb(var(--text-disabled) / <alpha-value>)',
        },
      },
      fontFamily: {
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-3': 'pulse-attention 0.6s ease-in-out 3',
      },
      keyframes: {
        'pulse-attention': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '3px 3px 0px 0px rgba(0,0,0,1)',
          },
          '50%': {
            transform: 'scale(1.05)',
            boxShadow: '5px 5px 0px 0px rgba(0,0,0,1)',
          },
        },
      },
    },
  },
  plugins: [],
};
