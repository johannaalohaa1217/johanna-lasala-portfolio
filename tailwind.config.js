/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F4F7FB',
          100: '#E8EEF5',
          200: '#D3DDE8',
          300: '#AAB9CA',
          400: '#718198',
          500: '#526277',
          600: '#344357',
          700: '#223044',
          800: '#152236',
          900: '#0B1628',
          950: '#07101D',
        },
        signal: {
          50: '#E6FBF7',
          100: '#C8F4EB',
          200: '#8FE5D7',
          300: '#50CDBA',
          400: '#20B39F',
          500: '#0E9383',
          600: '#087466',
          700: '#06564D',
        },
        ember: {
          50: '#FFF1F0',
          100: '#FFD9D6',
          400: '#F47A70',
          500: '#D95750',
          600: '#B83E39',
        },
        gold: {
          300: '#FFE59A',
          400: '#F6C85F',
          500: '#DFAE3D',
          600: '#B88520',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Iowan Old Style', 'Baskerville', 'serif'],
        poster: ['"Bebas Neue"', 'Impact', 'Haettenschweiler', 'sans-serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
