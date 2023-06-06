/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#021327',
        'darkGreen':'#44DA64',
        'limeGreen':'#44DA64',
        'darkPurple':'#616AF9',
        'lightBlue':'#04182F',
        'borderLight':'#FFFFFF2B',
        'lightGray':'#DCDCDE',
        'fbLink':'#1877F2',
        'inLink':'#0A66C2',
        'twLink':'#1DA1F2',
        'ytLink':'#CD201F',
        'rssLink':'#F57D00',
        'orange':'#f0ad4e',
      },
      backgroundImage: {
        'bgLines': "url('./images/bg_img1.png')",
        'bgLines2': "url('./images/img_2.png')",
        'bgWoman': "url('./images/woman-computer.jpg')",
        'bgMap': "url('./images/map_bg.png')",
        'bgTblet': "url('./images/tablet-html-screen.jpg')",
        'bgMan': "url('./images/relaxed-man-lying-on-couch-using-laptop.jpg')",
        'bgTeam': "url('./images/bg_pattern_team.png')",
      },
      maxWidth: {
        maxWidth:'1280px'
      },
      backgroundPosition: {
        'centerPos':'center center',
        'centerBot':'bottom center',
      }
    },
  },
  plugins: [],
}

