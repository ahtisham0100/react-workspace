
import './App.css'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Home from './assets/Home'
import About from './assets/About'
import Contact from './assets/Contact'
import Header from './assets/Header'
import Login from './assets/Login'
import User from './assets/User'
import Topics from './assets/Topics'
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home>
          <h1>Home Page</h1>
          <p>Welcome to the Home Page!</p>
          <p>This is a protected route, only accessible if logged in.</p>
          <p>Feel free to explore the other routes.</p>
          <p>Enjoy your stay!</p>
         <About/>
          <Contact/>


          <p>See you later!</p>
          <p>Take care!</p>
          </Home>}  >
        
        </Route>
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
    <Route path='user/:username' element={<User/>} />
    <Route path="*" element={<h1>404 Not Found</h1>} />
      
      <Route path="topics" element={<Topics/>}>

      </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
