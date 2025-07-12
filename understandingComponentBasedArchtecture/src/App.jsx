import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
</>
  )
}

export default App
