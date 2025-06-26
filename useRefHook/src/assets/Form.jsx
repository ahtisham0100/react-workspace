import { useState, useRef } from "react";

function Form() {
    let formRef = useRef()
  let [formData, setFormDate] = useState({ name: "", phone: "" });

  function submitForm(e) {
    e.preventDefault() 

if(formData.name!=='' && formData.phone!=="" && formData.phone!==0) {
    console.log(formData);
    formRef.current.disabled=true; 
    console.log(formRef.current, formRef.current.disabled) 

    setTimeout(() => {
        formRef.current.disabled =false;
    }, 3000);

  } 
  window.scrollTo({top:500,left:90, behavior:'instant'})
}

  function handleChange(event) {
    event.preventDefault();
    let data = event.target.value;
    let item = event.target.getAttribute("name") 
     console.log(item, data);
    if (item === "firstname") {
      setFormDate((prev) => ({
        ...prev,
        name: data,
      })); 
    } 
 
    if(item==='phone'){
setFormDate(prev=>({
...prev,
phone:Number(data)
})) 


    } 
    console.log(formData)

  }
  return (
    <>
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter first Name"
          name="firstname"
        />
        <input
          type="number"
          onChange={handleChange}
          placeholder="phone Number"
          name="phone"
        />

        <button ref={formRef} onClick={submitForm}>Submit</button>
      </form>
    </>
  );
}

export default Form;
