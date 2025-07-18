import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SortingMemo from './components/SortingMemo'
import Counter from './components/Counter'
import Modal from './components/Modal'
import FormsHandling from './components/FormsHandling'
import ReducerComposition from './components/ReducerComposition'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <ReducerComposition/>
    {/* <FormsHandling/> */}
    <Modal/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
            <Counter/>

      
      <SortingMemo/>
    </>
  )
}

export default App
