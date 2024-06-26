import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    extend: {
      backgroundImage: {
        'button-shadow-radial':
          'radial-gradient(75% 100% at 50% 0%, rgba(56, 189, 248, 0.6) 0%, rgba(56, 189, 248, 0) 75%)',
        'nav-gradient':
          'linear-gradient(270deg, hsl(295, 76%, 51%) 0%, hsl(284, 70%, 73%) 26%, hsl(257, 70%, 86%) 39%, hsl(202, 92%, 90%) 50%, hsl(215, 77%, 81%) 61%, hsl(221, 73%, 70%) 74%, hsl(220, 76%, 51%) 100%)',
        'custom-gradient':
          'linear-gradient(130deg, rgb(36, 198, 220), rgb(84, 51, 255) 41.07%, rgb(0 255 151) 76.05%)',
      },
      borderRadius: {
        custom: '.25rem',
      },
      fontSize: {
        base: '1rem',
      },
      lineHeight: {
        base: '1.5rem',
      },
      textAlign: {
        center: 'center',
      },
      maxWidth: {
        '67': '16.75rem',
        '75': '18.75rem',
        '640': '40rem',
        '768': '48rem',
        '1024': '64rem',
        '1280': '80rem',
        '1440': '90rem',
      },
      spacing: {
        '25': '6.25rem',
        '62': '15.5rem',
        '60': '10.0rem',
      },
      padding: {
        '6.5': '1.625rem',
        '15': '3.75rem',
      },
      margin: {
        '6.5': '1.625rem',
      },
      colors: {
        primary: '#A0A0FF',
        secondary: '#34455B',
        accent: '#453230',
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        rusty: {
          950: '#141313',
          900: '#1B1A19',
          800: '#2A2827',
          700: '#464343',
          600: '#5B5856',
          500: '#7A7775',
          400: '#AAA7A5',
          300: '#D8D6D4',
          200: '#E7E6E4',
          100: '#F5F5F4',
          50: '#FAFAFA',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
      blur: {
        '72px': '72px',
      },
      opacity: {
        '91': '0.91',
        '99': '0.99',
      },
      width: {
        '85p': '85%',
      },
      height: {
        '400px': '400px',
        '600px': '600px',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        lexend: [`var(--font-lexend)`, 'sans-serif'],
      },
    },
  },

  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [],
} satisfies Config;
