import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RenderList from './assets/RenderList'
import GraphChart from './assets/Chart'

function App() {

 const products = [
  { id: 1, name: 'MacBook Pro', category: 'electronics' },
  { id: 2, name: 'iPhone', category: 'electronics' },
  { id: 3, name: 'Jeans', category: 'clothing' },
  { id: 4, name: 'Sneakers', category: 'footwear' },
  { id: 5, name: 'AirPods', category: 'electronics' },
];

  return (
    <> 
     <RenderList products={products}/>
<GraphChart/>
    </>
  )
}

export default App
