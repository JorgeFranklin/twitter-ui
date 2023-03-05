import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
  font-size: 62.5%;
  @font-face {
    font-display: swap;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/roboto-v30-latin-regular.woff2')
      format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/roboto-v30-latin-500.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/roboto-v30-latin-700.woff2') format('woff2');
  }
}

body {
  width: 100%;
  height: 100vh;
  color: #0f1419;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${theme.colors.black};
}

body, input, textarea, button {
  font: 400 1rem Roboto, sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
}

`

export default GlobalStyles
