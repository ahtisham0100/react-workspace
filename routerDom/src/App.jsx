
import './App.css'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Home from './assets/Home'
import About from './assets/About'
import Contact from './assets/Contact'
import Header from './assets/Header'
import Login from './assets/Login'
import User from './assets/User'
import Topics from './assets/Topics'
import ErrorBoundary from './assets/ErrorBoundary'
function App() {
  
  return ( 
  <> 

  
    
    <style>
      {`
    :root {
  --color-bg: #f8fafc;
  --color-glass: rgba(255,255,255,0.38);
  --color-primary: #a21caf;         /* Intense Electric Purple */
  --color-secondary: #ff1d4f;       /* Neon Hot Pink */
  --color-dark: #0a0a23;            /* Deep Navy */
  --color-light: #fffbe8;           /* Brighter Warm Light */
  --color-border: #c084fc;          /* Neon Indigo */
  --color-link: #06b6d4;            /* Neon Cyan */
  --color-link-hover: #38f9d7;      /* Electric Mint */
  --glass-blur: 38px;
  --glass-shadow: 0 12px 48px 0 rgba(162,28,175,0.32);
  --transition: 0.28s cubic-bezier(.4,0,.2,1);
  font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
  color: var(--color-dark);
  background: linear-gradient(135deg, #fffbe8 0%, #a21caf 60%, #ff1d4f 100%);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: inherit;
  color: var(--color-dark);
  transition: background var(--transition), color var(--transition);
}

/* Navbar glassmorphism and opaque background */
header {
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 4px 24px rgba(42,20,88,0.12);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border-bottom: 1.5px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 10;
  animation: headerFadeIn 1s ease;
  transition: background var(--transition), box-shadow var(--transition);
}

/* Navbar links glassmorphism and improved style */
nav ul {
  list-style: none;
  display: flex;
  gap: 28px;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
}

nav li {
  display: inline;
}

nav a {
  color: var(--color-dark);
  text-decoration: none;
  font-size: 1.08rem;
  padding: 10px 22px;
  border-radius: 10px;
  background: rgba(255,255,255,0.45);
  box-shadow: 0 2px 8px 0 rgba(124,58,237,0.07);
  transition: 
    background var(--transition), 
    color var(--transition), 
    box-shadow var(--transition), 
    border var(--transition);
  position: relative;
  border: 1.5px solid transparent;
  font-weight: 600;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  overflow: hidden;
  z-index: 1;
}

nav a.active,
nav a:hover,
nav a:focus {
  color: var(--color-primary);
  background: rgba(124,58,237,0.13);
  border: 1.5px solid var(--color-primary);
  box-shadow: 0 4px 18px 0 rgba(124,58,237,0.13);
  outline: none;
}

nav a::before {
  display: none;
}

header {
  width: 100%;
  background: rgba(30, 41, 59, 0.7);
  box-shadow: 0 2px 24px rgba(42,20,88,0.10);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 10;
  animation: headerFadeIn 1s ease;
}

@keyframes headerFadeIn {
  from { opacity: 0; transform: translateY(-30px);}
  to { opacity: 1; transform: translateY(0);}
}

nav ul {
  list-style: none;
  display: flex;
  gap: 32px;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
}

nav li {
  display: inline;
}

nav a {
  color: var(--color-light);
  text-decoration: none;
  font-size: 1.1rem;
  padding: 10px 22px;
  border-radius: 8px;
  transition: background var(--transition), color var(--transition), box-shadow var(--transition);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

nav a::before {
  content: "";
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  opacity: 0;
  z-index: -1;
  transition: opacity var(--transition);
  border-radius: 8px;
}

nav a.active,
nav a:hover,
nav a:focus {
  color: var(--color-dark);
  box-shadow: 0 2px 12px 0 rgba(124,58,237,0.10);
}

nav a.active::before,
nav a:hover::before,
nav a:focus::before {
  opacity: 1;
}

a {
  font-weight: 500;
  color: var(--color-link);
  text-decoration: underline;
  transition: color var(--transition), background var(--transition);
  background-color: transparent;
}
a:hover, a:focus {
  color: var(--color-light);
  background: linear-gradient(90deg, var(--color-link-hover), var(--color-primary));
  border-radius: 4px;
  outline: none;
}

h1 {
  font-size: 3em;
  line-height: 1.1;
  color: var(--color-primary);
  text-align: center;
  margin-top: 40px;
  letter-spacing: -1px;
  animation: fadeInDown 1s cubic-bezier(.4,0,.2,1);
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-40px);}
  to { opacity: 1; transform: translateY(0);}
}

button {
  border-radius: 12px;
  border: 1px solid var(--color-border);
  padding: 0.7em 1.5em;
  font-size: 1.1em;
  font-weight: 600;
  font-family: inherit;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  color: var(--color-light);
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(124,58,237,0.10);
  transition: background var(--transition), border-color var(--transition), box-shadow var(--transition), transform var(--transition);
  outline: none;
}

button:hover,
button:focus {
  background: linear-gradient(90deg, var(--color-secondary), var(--color-primary));
  color: var(--color-light);
  border-color: var(--color-primary);
  box-shadow: 0 4px 24px 0 rgba(244,63,94,0.15);
  transform: translateY(-2px) scale(1.03);
  outline: 2px solid var(--color-secondary);
}

.login-container {
  max-width: 370px;
  margin: 64px auto;
  padding: 36px 28px;
  background: var(--color-glass);
  border-radius: 18px;
  box-shadow: var(--glass-shadow);
  border: 1.5px solid rgba(124,58,237,0.12);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  animation: glassFadeIn 1.2s cubic-bezier(.4,0,.2,1);
  position: relative;
  overflow: hidden;
}

@keyframes glassFadeIn {
  from { opacity: 0; transform: scale(0.95);}
  to { opacity: 1; transform: scale(1);}
}

.login-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(124,58,237,0.08), rgba(244,63,94,0.08));
  z-index: 0;
  border-radius: 18px;
  pointer-events: none;
}

.login-container h2 {
  text-align: center;
  margin-bottom: 28px;
  color: var(--color-primary);
  font-size: 2em;
  font-weight: 700;
  letter-spacing: -0.5px;
  position: relative;
  z-index: 1;
}

.login-form .form-group {
  margin-bottom: 22px;
  position: relative;
  z-index: 1;
}

.login-form label {
  display: block;
  margin-bottom: 7px;
  color: var(--color-dark);
  font-weight: 600;
  letter-spacing: 0.2px;
}

.login-form input[type="text"],
.login-form input[type="password"] {
  width: 100%;
  padding: 12px 14px;
  border: 1.5px solid var(--color-border);
  border-radius: 8px;
  font-size: 16px;
  background: rgba(255,255,255,0.7);
  color: var(--color-dark);
  transition: border var(--transition), box-shadow var(--transition);
  box-shadow: 0 1px 4px 0 rgba(124,58,237,0.04);
  outline: none;
}

.login-form input[type="text"]:focus,
.login-form input[type="password"]:focus {
  border-color: var(--color-primary);
  box-shadow: 0 2px 12px 0 rgba(124,58,237,0.10);
}

.login-form button[type="submit"] {
  width: 100%;
  padding: 12px 0;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  color: var(--color-light);
  border: none;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(124,58,237,0.10);
  transition: background var(--transition), box-shadow var(--transition), transform var(--transition);
  margin-top: 10px;
}

.login-form button[type="submit"]:hover {
  background: linear-gradient(90deg, var(--color-secondary), var(--color-primary));
  box-shadow: 0 4px 24px 0 rgba(244,63,94,0.15);
  transform: translateY(-2px) scale(1.03);
}

@media (prefers-color-scheme: dark) {
  :root {
    color: var(--color-light);
    background: linear-gradient(135deg, #181c2f 0%, #232946 100%);
  }
  body {
    background: inherit;
    color: var(--color-light);
  }
  header {
    background: rgba(24,28,47,0.85);
    border-bottom: 1px solid rgba(124,58,237,0.18);
  }
  nav a {
    color: var(--color-secondary);
    background: transparent;
  }
  nav a.active,
  nav a:hover,
  nav a:focus {
    background: transparent;
    color: var(--color-primary);
    box-shadow: 0 2px 12px 0 rgba(124,58,237,0.15);
  }
  nav a.active::before,
  nav a:hover::before,
  nav a:focus::before {
    opacity: 0.18;
  }
  .login-container {
    background: rgba(30,41,59,0.65);
    color: var(--color-light);
    border: 1.5px solid rgba(124,58,237,0.18);
  }
  .login-container::before {
    background: linear-gradient(120deg, rgba(124,58,237,0.10), rgba(244,63,94,0.10));
  }
  .login-container h2 {
    color: var(--color-secondary);
  }
  .login-form input[type="text"],
  .login-form input[type="password"] {
    background: rgba(24,28,47,0.7);
    color: var(--color-light);
    border: 1.5px solid var(--color-primary);
  }
  .login-form input[type="text"]:focus,
  .login-form input[type="password"]:focus {
    border-color: var(--color-secondary);
    box-shadow: 0 2px 12px 0 rgba(244,63,94,0.10);
  }
  .login-form button[type="submit"] {
    background: linear-gradient(90deg, var(--color-secondary), var(--color-primary));
    color: var(--color-light);
  }
  .login-form button[type="submit"]:hover {
    background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  }
  a,
  a:visited {
    color: var(--color-secondary);
    background: transparent;
  }
  a:hover,
  a:focus {
    color: var(--color-dark);
    background: var(--color-secondary);
    outline: none;
  }
  button,
  button:focus,
  button:hover {
    background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
    color: var(--color-light);
    border-color: var(--color-secondary);
    outline: 2px solid var(--color-secondary);
  }
}

@media (max-width: 600px) {
  header {
    padding: 10px 0;
  }
  nav ul {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  nav li {
    margin-bottom: 6px;
  }
  .login-container {
    width: 96%;
    padding: 18px;
    margin: 32px auto;
  }
  h1 {
    font-size: 2em;
    margin-top: 24px;
  }
}



/* Apply login-container glassmorphism style to the navbar */
header {
  background: var(--color-glass);
  border-radius: 0 0 18px 18px;
  box-shadow: var(--glass-shadow);
  border-bottom: 1.5px solid rgba(124,58,237,0.12);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  position: sticky;
  z-index: 10;
  height:10vh;
  animation: headerFadeIn 1s ease;;
display: flex;
  justify-content: center;
  align-items: center;
}

/* Use button styling on active navbar links */
nav a.active,
nav a:focus,
nav a:hover {
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  color: var(--color-light);
  border: 1.5px solid var(--color-primary);
  box-shadow: 0 4px 24px 0 rgba(244,63,94,0.15); 

  transform: translateY(-2px) scale(1.03);
  font-weight: 700;
} 


/* Match navbar background to login-container glassmorphism */
header {
  background-color: var(--glass-shadow);
  border-radius: 0 0 18px 18px;
  box-shadow: var(--glass-shadow);
  border-bottom: 1.5px solid rgba(124,58,237,0.12);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
}
 
.Error404 {
  position: relative;
  margin: 80px auto 0 auto;
  max-width: 420px;
  min-height: 320px;
  border-radius: 22px;
  box-shadow: var(--glass-shadow);
  border: 2px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  animation: error404FadeIn 1.2s cubic-bezier(.4,0,.2,1);
  z-index: 1;
}

@keyframes error404FadeIn {
  from { opacity: 0; transform: scale(0.92) translateY(40px);}
  to { opacity: 1; transform: scale(1) translateY(0);}
}

.Error404-404 {
  font-size: 6rem;
  font-weight: 900;
  letter-spacing: -4px;
  color: var(--color-primary);
  text-shadow:
    2px 2px 0 var(--color-secondary),
    0 0 18px var(--color-border);
  position: relative;
  animation: float404 2.5s infinite cubic-bezier(.4,0,.2,1) alternate;
  user-select: none;
  cursor: pointer;
  transition: color 0.3s;
}

.Error404-404:hover {
  color: var(--color-secondary);
  text-shadow:
    2px 2px 0 var(--color-primary),
    0 0 24px var(--color-secondary);
  animation: glitch404 0.5s linear infinite;
}

@keyframes float404 {
  0% { transform: translateY(0);}
  100% { transform: translateY(-18px);}
}

@keyframes glitch404 {
  0% { transform: translate(0,0);}
  20% { transform: translate(-2px,2px) skewX(-2deg);}
  40% { transform: translate(2px,-1px) skewY(2deg);}
  60% { transform: translate(-1px,2px) skewX(1deg);}
  80% { transform: translate(2px,1px) skewY(-1deg);}
  100% { transform: translate(0,0);}
}

.Error404-message {
  font-size: 1.5rem;
  color: var(--color-dark);
  margin: 18px 0 28px 0;
  text-align: center;
  animation: fadeInDown 1.2s cubic-bezier(.4,0,.2,1);
}

.Error404-home-btn {
  padding: 0.7em 2em;
  border-radius: 12px;
  border: 2px solid var(--color-primary);
 
  color: var(--color-light);
  font-size: 1.1em;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(124,58,237,0.10);
  transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
  outline: none;
  margin-bottom: 10px;
  animation: fadeInDown 1.5s cubic-bezier(.4,0,.2,1);
}
.Error404-home-btn:hover,
.Error404-home-btn:focus {
  background: linear-gradient(90deg, var(--color-secondary), var(--color-primary));
  color: var(--color-light);
  transform: translateY(-2px) scale(1.04) rotate(-1deg);
  box-shadow: 0 4px 24px 0 rgba(244,63,94,0.15);
  outline: 2px solid var(--color-secondary);
}

/* Broken wire SVG background for Error404 */
.Error404::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  z-index: 0;
  background: url('data:image/svg+xml;utf8,<svg width="420" height="320" viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 60 Q60 120 110 60 T210 60 Q260 120 310 60 T410 60" stroke="%23a21caf" stroke-width="4" stroke-dasharray="12 8" /><circle cx="210" cy="60" r="8" fill="%23ff1d4f"/><rect x="206" y="52" width="8" height="16" rx="2" fill="white" transform="rotate(20 210 60)"/><rect x="214" y="52" width="8" height="16" rx="2" fill="white" transform="rotate(-20 218 60)"/></svg>');
  background-repeat: no-repeat;
  background-position: center 32px;
  background-size: 90% auto;
  opacity: 0.22;
  filter: blur(0.5px);
} 

/* Animated floating neon shapes for background */
.animated-bg-svg {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.animated-bg-svg svg {
  position: absolute;
  filter: blur(1.5px) brightness(1.1);
  opacity: 0.22;
  animation: floatSvg 8s ease-in-out infinite alternate;
}

.animated-bg-svg .shape1 {
  left: 8vw;
  top: 12vh;
  width: 120px;
  animation-delay: 0s;
}
.animated-bg-svg .shape2 {
  right: 10vw;
  top: 18vh;
  width: 90px;
  animation-delay: 2s;
}
.animated-bg-svg .shape3 {
  left: 40vw;
  bottom: 8vh;
  width: 100px;
  animation-delay: 1.2s;
}
.animated-bg-svg .shape4 {
  right: 18vw;
  bottom: 12vh;
  width: 140px;
  animation-delay: 3.5s;
}

@keyframes floatSvg {
  0% { transform: translateY(0) scale(1);}
  100% { transform: translateY(-24px) scale(1.08);}
} 


/* Animated SVGs of broken wires for background */
.broken-wire-svg {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.broken-wire-svg svg {
  position: absolute;
  opacity: 0.18;
  filter: blur(0.5px) brightness(1.1);
  animation: brokenWireFloat 7s ease-in-out infinite alternate;
}

.broken-wire-svg .wire1 {
  left: 5vw;
  top: 10vh;
  width: 180px;
  animation-delay: 0s;
}
.broken-wire-svg .wire2 {
  right: 8vw;
  top: 22vh;
  width: 140px;
  animation-delay: 1.5s;
}
.broken-wire-svg .wire3 {
  left: 30vw;
  bottom: 10vh;
  width: 160px;
  animation-delay: 2.8s;
}
.broken-wire-svg .wire4 {
  right: 20vw;
  bottom: 16vh;
  width: 200px;
  animation-delay: 4s;
}

@keyframes brokenWireFloat {
  0% { transform: translateY(0) scale(1);}
  100% { transform: translateY(-18px) scale(1.04);}
} 


/* Animated SVGs for Error404 background */
.Error404-animated-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.Error404-animated-bg svg {
  position: absolute;
  opacity: 0.18;
  filter: blur(1.2px) brightness(1.1);
  animation: error404Float 6s ease-in-out infinite alternate;
}

.Error404-animated-bg .shape1 {
  left: 12%;
  top: 18%;
  width: 70px;
  animation-delay: 0s;
}
.Error404-animated-bg .shape2 {
  right: 14%;
  top: 28%;
  width: 54px;
  animation-delay: 1.2s;
}
.Error404-animated-bg .shape3 {
  left: 32%;
  bottom: 16%;
  width: 60px;
  animation-delay: 2.1s;
}
.Error404-animated-bg .shape4 {
  right: 18%;
  bottom: 22%;
  width: 80px;
  animation-delay: 3.3s;
}

@keyframes error404Float {
  0% { transform: translateY(0) scale(1) rotate(0deg);}
  100% { transform: translateY(-18px) scale(1.08) rotate(8deg);}
}
  
      `}
      </style>


<ErrorBoundary>  
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
    <Route path="*" element={<div className='Error404'>404 Not Found</div> } />
      
      <Route path="topics" element={<Topics/>}>

      </Route>
      </Routes>

    </BrowserRouter>
</ErrorBoundary>
  </>
  )
}

export default App
