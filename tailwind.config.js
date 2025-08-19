/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ed',
          100: '#fdecd4',
          200: '#fad7a8',
          300: '#f6bb71',
          400: '#f09438',
          500: '#855318',
          600: '#855318',
          700: '#693c00',
          800: '#4d2b00',
          900: '#3d2200',
        },
        secondary: {
          50: '#f9f6f2',
          100: '#f1e9e0',
          200: '#e3d0c0',
          300: '#d3b59c',
          400: '#725a42',
          500: '#725a42',
          600: '#59422c',
          700: '#433119',
          800: '#2f220f',
          900: '#201608',
        },
        tertiary: {
          50: '#f5f8ed',
          100: '#e8f0d8',
          200: '#dce8b4',
          300: '#c8dc86',
          400: '#58633a',
          500: '#58633a',
          600: '#414b24',
          700: '#313a1a',
          800: '#232913',
          900: '#181c0d',
        },
        surface: {
          50: '#faf9f7',
          100: '#f4f1ed',
          200: '#e8e1da',
          300: '#d5c3b5',
          400: '#837468',
          500: '#51453a',
          600: '#211a14',
          700: '#1a140f',
          800: '#140f0b',
          900: '#0f0b08',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
