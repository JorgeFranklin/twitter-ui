// import original module declarations
import theme from '../styles/theme'

type Theme = typeof theme

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
