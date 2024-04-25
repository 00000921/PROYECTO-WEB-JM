/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      backgroundColor: {
        '111A2B': '#111A2B',
        '333C4E': '#333C4E',
      },
    },
  },
  plugins: [
  ],
}