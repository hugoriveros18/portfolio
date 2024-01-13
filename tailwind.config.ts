import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xl: { max: '1280px' },
      lg: { max: '1023px' },
      md: { max: '768px' },
      sm: { max: '639px' }
    },
    colors: {
      // firstColor: '#212b4b',
      // secondColor: '#70b2af',
      // thirdColor: '#81a9ba',
      // fourthColor: '#cac1a3',
      // fifthColor: '#d2d2b6',
      // firstColor: '#131b24',
      // secondColor: '#384f6d',
      // thirdColor: '#20b0d9',
      // fourthColor: '#20dbd8',
      // fifthColor: '#aaedea',
      firstColor: '#112241',
      secondColor: '#344791',
      thirdColor: '#0790ff',
      fourthColor: '#0efff9',
      fifthColor: '#aefff7',
      sixthColor: '#E0FFFF',
      sixthColorOpacity: 'rgba(224, 255, 255, 0.1)',
      white: '#fff'
    },
    extend: {
      gridTemplateColumns: {
        aboutMe: '3fr 2fr'
      }
    }
  },
  plugins: [],
}
export default config
