import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/ui/ThemeProvider.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >    <App />
        </ThemeProvider>

  </StrictMode>,
)
