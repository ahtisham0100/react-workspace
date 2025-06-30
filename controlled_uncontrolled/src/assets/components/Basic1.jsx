import { useState } from "react"

function Basic1() {
    

let [value,setValue] =useState("")


    return(
        <>
        <input type="text" onChange={(e)=>setValue(e.target.value)} />
        <p>{value}</p>
        </>
    )
}


export default Basic1;