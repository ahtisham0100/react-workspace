import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { ModeToggle } from './components/ui/ModeToggle'
import { ThemeProvider } from './components/ui/ThemeProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ModeToggle/> 
    <h1>Counter: {count}</h1>
<Button variant="default"  size="lg" onClick={() => setCount(count + 1)}>
{count} Click me
</Button>
<Button variant="default" size="large">Default</Button>
<Button variant="destructive" className="ml-4">Delete</Button>
<Button variant="outline" className="ml-4">Outline</Button>

<Button variant={"secondary"} className="ml-4" onClick={()=>{
  document.body.classList.toggle('dark')
}}> Switch theme </Button>

<h1>understand the aschild in buttons</h1>
<Button asChild variant={"default"} size={"lg"}>
   <a href="#">This is child</a>
</Button> 

<Button asChild onClick={()=>{alert("button clicked")}}>
  <div className="btn-div">This is a btn div</div>
</Button>
</>
  )
}

export default App
