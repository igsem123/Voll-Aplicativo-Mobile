import { extendTheme } from 'native-base'

export const TEMAS = extendTheme({
  colors: {
    gray: {
      300: '#8D8D99'
    },
    blue: {
      500: '#339CFF',
      700: '#0B3B60',
      800: '#00213D'
    },
    white: '#fff',
    black: '#000'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xl1: 28
  }
})