import { useState } from 'react'
import './App.css'
import Basic1 from './assets/components/Basic1'
import Basic2 from './assets/components/Basic2'
import FileInput from './assets/components/FileInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Basic1/>
      <Basic2/>
      <FileInput/>
    </>
  )
}

export default App
