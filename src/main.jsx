import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RecipesProvider from './contexts/recipe.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipesProvider>
      <App />
    </RecipesProvider>
  </React.StrictMode>,
)
