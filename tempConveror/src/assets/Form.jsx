import { useState } from "react";
  
function FirstName({firstName , handleFname}) { 


    return(
    <input type="text" value={firstName} onChange={e=>handleFname(e.target.value)} placeholder="First Name"/>    
    )
}

function LastName({LastName,handleLname}) {
    
return(
   <input type="text" value={LastName} onChange={e=>handleLname(e.target.value)}></input>

)

}  


export default function Form() {

      const [firstName , setFname]= useState("");
    const [LName , setLname]= useState("");

    return(

        <> 
        <FirstName firstName={firstName} handleFname={setFname}/>
        <LastName LastName={LName} handleLname={setLname}/>
        <div>FUll Name : {firstName} {LName} </div>
        </>
    )
} 

