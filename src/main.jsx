import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MovieContext, MovieProvider } from './context/MovieContext.jsx'
import { SidebarProvider } from './context/SidebarContext.jsx'

createRoot(document.getElementById('root')).render(

  <SidebarProvider>
      <MovieProvider>
    <App />
  </MovieProvider>
  </SidebarProvider>
)
