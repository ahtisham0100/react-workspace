
import './App.css'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Home from './assets/Home'
import About from './assets/About'
import Contact from './assets/Contact'
import Header from './assets/Header'
import Login from './assets/Login'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
