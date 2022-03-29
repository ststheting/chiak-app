module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('./src/views/icons/login.jpg')",
        'homepage': "url('./src/views/icons/image.jpg')",
      }
    },
  },
  plugins: [],
}