import { useEffect, useState } from "react";
function CountDown() {
    let [time , setTime]=useState(Number(10));

    useEffect(()=>{
        if(time===0) return;
        const intervalId= setInterval(() => {
            setTime(prev=>prev-1)
        }, 1000);

        return ()=>clearInterval(intervalId)
    },[time])


  return(
    <>
    <div className="timer">{time} seconds</div>
    </>
  )
} 


export default CountDown;
