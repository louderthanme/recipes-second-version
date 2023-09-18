import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RecipesProvider from './contexts/recipe.context.jsx'
import { UserProvider } from './contexts/user.context.jsx'
import { DotMatrixBackground } from './utils/styledComponents.js'
import { createTheme, ThemeProvider } from '@mui/material'
import { blue } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DotMatrixBackground>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <RecipesProvider>
          <App />
        </RecipesProvider>
      </UserProvider>
    </ThemeProvider>
    </DotMatrixBackground>
  </React.StrictMode>,
)
