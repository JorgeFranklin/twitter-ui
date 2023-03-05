import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
