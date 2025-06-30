import {  useRef, useState } from "react"

function Basic2() {
    const mailRef = useRef();
    let[emailDisplay, setEmail] = useState(""); 

    function reset() {
        mailRef.current.value=""
        emailDisplay=""
        setChecked(false)
    }
const [checked , setChecked]= useState(false)
    function handleSubmit(e) {
        e.preventDefault();
        if (mailRef.current) {
            setEmail(mailRef.current.value);
        console.log("set email")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='email' ref={mailRef} />
                <button type="submit">submit </button>
           <input type="checkbox" checked={checked} onChange={e=>setChecked(e.target.checked)} name="checkbox" value={checked}  id="" /> 
           <p> is checked :{checked==true?'yes':"no"}</p>
            </form>

<button onClick={reset}>reset</button>
            <p>email : {emailDisplay}</p>
        </>
    );
}


export default Basic2;