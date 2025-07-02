import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './assets/Dashboard'
import ThemeProvider from './assets/context/ThemeProvide'
import Navbar from './assets/components/Navbar'

function App() {
 
  return (
<>

    <ThemeProvider>
      <h1>working</h1>
      <Dashboard />
    </ThemeProvider>
</>
  )
}

export default App

