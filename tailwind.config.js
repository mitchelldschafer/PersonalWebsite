/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3F51B5',
          dark: '#303F9F',
          light: '#C5CAE9',
        },
        secondary: {
          DEFAULT: '#2196F3',
          dark: '#1976D2',
          light: '#BBDEFB',
        },
        neutral: {
          DEFAULT: '#607D8B',
          dark: '#455A64',
          light: '#CFD8DC',
        },
        background: '#F5F7FA',
        success: '#4CAF50',
        warning: '#FFC107',
        error: '#F44336',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Roboto Mono', 'ui-monospace', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '68': '17rem',
        '84': '21rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'primary' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3F51B5 0%, #303F9F 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)',
      },
    },
  },
  plugins: [],
};