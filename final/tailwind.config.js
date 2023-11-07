/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./App.{js,jsx,ts,tsx}", 
  "./screens/**/*.{js,jsx,ts,tsx}", 
  "./components/**/*.{js,jsx,ts,tsx}"
], // All the directories that will use Tailwind CSS classes
  theme: {
    extend: {},
  },
  plugins: [],
}

