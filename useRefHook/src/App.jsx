import { useEffect, useState } from 'react'
import StopWatch from './assets/StopWatch';
import { useRef } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const ref= useRef("none");
  useEffect(()=>{
    console.log("focusing the input")
ref.current=count;
console.log(ref.current.value)
  },[count])
  return (
    <>
     <input type="text" ref={ref} />
     <button onClick={()=>{
      setCount(prev=>prev+1)
     }}>{count}</button>
     <StopWatch/>
    </>
  )
}

export default App
