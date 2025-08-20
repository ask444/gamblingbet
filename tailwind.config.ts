import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // './app/**/*.{ts,tsx}',
    // './components/**/*.{ts,tsx}',
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f8ff',
          100: '#e6f0ff',
          200: '#c5dbff',
          300: '#9ec2ff',
          400: '#6b9cff',
          500: '#3c74ff',
          600: '#245aff',
          700: '#1b49d6',
          800: '#1539a8',
          900: '#0f2a7a'
        }
      },
      boxShadow: {
        glow: '0 0 0 3px rgba(59,130,246,0.25)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;