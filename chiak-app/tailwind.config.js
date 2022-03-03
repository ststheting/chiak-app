module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('./src/views/icons/login2.jpg')",
      }
    },
  },
  plugins: [],
}