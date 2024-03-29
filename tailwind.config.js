// eslint-disable-next-line
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      cyan: '#00C9FF',
      blue: {
        lighter: '#4040B8',
        light: '#3333B4',
        DEFAULT: '#2525A5',
        dark: '#1E1E85',
      },
      white: '#fff',
    },
    fontFamily: {
      sans: [
        'Space Grotesk',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    fontSize: {
      xs: [
        '12px',
        { lineHeight: '15px' },
      ],
      sm: [
        '17px',
        {
          lineHeight: '23px',
          letterSpacing: '-0.15px',
        },
      ],
      base: [
        '22px',
        {
          lineHeight: '28px',
          letterSpacing: '-0.15px',
        },
      ],
      lg: [
        '27px',
        {
          lineHeight: '35px',
          letterSpacing: '-0.21px',
        },
      ],
      xl: [
        '37px',
        {
          lineHeight: '45px',
          letterSpacing: '-0.3px',
        },
      ],
      '2xl': [
        '65px',
        {
          lineHeight: '72px',
          letterSpacing: '-0.8px',
        },
      ],
    },
    underlineOffset: {
      small: '1px',
      medium: '3px',
    },
    extend: {
      animation: {
        'bounce': 'bounce 0.5s infinite',
      },
      keyframes: {
         bounce: {
           '0%, 100%': { transform: 'translateY(-10%)' },
           '50%': { transform: 'translateY(0)' },
         }
      }
    }
  },
  variants: {
    underlineColors: ['hover', 'focus', 'active'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-underline-utils'),
  ]
};
