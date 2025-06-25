import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Form from './assets/Form'
import ThemeMode from './assets/ThemeMode'
import ProductCustomizer from './assets/ProductCustomizer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <ThemeMode/>
    <ProductCustomizer/>
    <FileUploader/>
    </>
  )
}

export default App
function FileUploader() {
    let  [title , setTitle] = useState("This is Title")

  const fileInputRef = useRef(null);

  const handleSubmit = () => {
    const file = fileInputRef.current.files[0];
    console.log(file);
  };
useEffect(() => {
  document.title = "Welcome to Dashboard"; // side effect only
}, []);
 

useEffect(()=>{
  document.title=title; 
  console.log("title useefect was called")
},[title]) 



  return (
    <form onSubmit={handleSubmit}>
       <Form/>

      <input type="file" ref={fileInputRef} />
      <button type="submit">Upload</button>
    </form>
  );
}
