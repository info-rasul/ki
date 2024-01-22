module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: {
        sm: '16px',
        md: '40px',
        lg: '60px',
        xl: '80px',
      },

      // default breakpoints but with 40px removed
      screens: {
        sm: '1080px',
        md: '1160px',
        lg: '1280px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}