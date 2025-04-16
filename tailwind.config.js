/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--tw-primary) / <alpha-value>)',
          dark: 'rgb(var(--tw-primary-dark) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'rgb(var(--tw-secondary) / <alpha-value>)',
          dark: 'rgb(var(--tw-secondary-dark) / <alpha-value>)'
        },
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  safelist: [
    'bg-red-50',
    'border-red-400',
    'text-red-700',
    'text-red-400',
    'bg-blue-600',
    'to-blue-400',
    'from-blue-600',
    'hover:bg-blue-700',
    'focus:ring-blue-500',
    'text-blue-100',
    'hover:text-blue-50',
    'bg-black/10',
    'border-white/20',
  ]
} 