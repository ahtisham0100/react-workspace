import { useState , useRef, useEffect } from "react";

function ButtonClicks() {
    let [noOfClicks,setClicks] = useState(0);

let clicks =  useRef();
function handleClick() {
    setClicks(prev=>prev+1);
}
useEffect(()=>{
clicks.current= noOfClicks;
if(clicks.current>=1){
alert(`Clicks are ${clicks.current} !`)}
},[noOfClicks])   



    return(
        <>
        <button onClick={handleClick}>Click Me</button></>
    )

} 


export default ButtonClicks;
