import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyles'
import ListUsers from './pages/ListUsers/index.jsx'
import { RouterProvider } from 'react-router-dom'
import	router from './router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
