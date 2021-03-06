import { DefaultTheme } from 'styled-components'

export const mainTheme: DefaultTheme = {
  appSize: '10px',
  shadow: {
    elevations: [
      'box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)',
      'box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)',
      'box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)',
      'box-shadow: 3px 2px rgba(42, 43, 49,.3)',
    ],
  },
  colors: {
    primary: '#031326',
    primaryShadow: 'rgba(3, 19, 38,.6)',
    secondary: '#172C42',
    secondaryShadow: 'rgba(47, 68, 92,.6)',
    black: '#030506',
    white: '#fff',
    offWhite: '#F1EFEE',
  },
  brakePoints: {
    small: 400,
    medium: 960,
    large: 1140,
  },
  size: {
    h1: '50px',
    h2: '40px',
    h3: '30px',
    h4: '27px',
    h5: '22px',
    p: '18px',
    a: '16px',
    maxWidth: '1100px',
  },
  transition: {
    mainTransition: 'all .3s linear',
    secondaryTransition: 'all 1s ease',
    quickTransition: 'all 200ms ease-in-out',
  },
}
export const secondaryTheme: DefaultTheme = {
  appSize: '10px',
  shadow: {
    elevations: [
      'box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)',
      'box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)',
      'box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)',
      'box-shadow: 3px 2px rgba(42, 43, 49,.3)',
    ],
  },
  colors: {
    primary: '#fff',
    primaryShadow: 'rgba(3, 19, 38,.6)',
    secondary: '#343434',
    secondaryShadow: 'rgba(47, 68, 92,.6)',
    black: '#fefe',
    white: '#052143',
    offWhite: '#052143',
  },
  brakePoints: {
    small: 400,
    medium: 960,
    large: 1140,
  },
  size: {
    h1: '50px',
    h2: '40px',
    h3: '30px',
    h4: '27px',
    h5: '22px',
    p: '18px',
    a: '16px',
    maxWidth: '1100px',
  },
  transition: {
    mainTransition: 'all .3s linear',
    secondaryTransition: 'all 1s ease',
    quickTransition: 'all 200ms ease-in-out',
  },
}
