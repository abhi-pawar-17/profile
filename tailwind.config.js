/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          '600': '#2563EB',
          '700': '#1D4ED8',
        },
        'gray': {
          '800': '#1F2937',
          '900': '#111827',
        },
      },
      boxShadow: {
        '2xl': '0 15px 30px rgba(0, 0, 0, 0.25), 0 6px 8px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
