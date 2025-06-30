import { useState } from 'react'
import './App.css'
import Basic1 from './assets/components/Basic1'
import Basic2 from './assets/components/Basic2'
import FileInput from './assets/components/FileInput'
import UseFormHoook from './assets/components/useFormHoook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UseFormHoook/>
      <Basic1/>
      <Basic2/>
      <FileInput/>
    
    </>
  )
}

export default App
