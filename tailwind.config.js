/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#F68712',
        },
        primary: {
          DEFAULT: '#24243E',
        },
        secondary: {
          DEFAULT: '#CEEAF7',
        },
        dark: {
          DEFAULT: '#7D9CAB',
        },
        light: {
          DEFAULT: '#84BDC2',
        },
        accent: {
          DEFAULT: '#9E9E9E',
          50: '#FAFAFA',
          100: '#EEEEEE',
          200: '#424242',
          300: '#BDBDBD',
          400: '#9E9E9E',
          500: '#616161',
          600: '#424242',
          700: '#212121',
        },
      },
    },
  },
  plugins: [],
};
