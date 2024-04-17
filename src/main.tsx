import React from 'react'
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './index.css'
import './App.css'
import { ThemeProvider } from './styles/ThemeContext.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<HelmetProvider>
  <ThemeProvider>
    <App />
    </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
