module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        homeBanner: ['clamp(28px, 4vw, 40px)'],
        homeArticle: ['clamp(24px, 2.5vw, 25px)'],
        homeQuote: ['clamp(18px, 2vw, 25px)'],
        homeAdvantage: ['clamp(22px, 2.2vw, 30px)'],
        homeSpecialization: ['clamp(24px, 2.2vw, 30px)'],
        homeInformationCar: ['clamp(18px, 2vw, 25px)'],
        homeErrorBlock: ['clamp(20px, 2.1vw, 30px)'],
      },
    },
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