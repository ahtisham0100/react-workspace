import { useState } from "react";

function LightTheme({theme , handleClick}) {
    return(
        <button className={theme} onClick={()=>handleClick("dark")}>{theme==='light'?"change to dark" : "Dark Mode"}</button>
    )
}

function DarkTheme({theme, handleClick}) {
    return(
    <button className={theme} onClick={()=>handleClick("light")}>{theme==='dark'?"Change to Light":"Light Mode"}</button>
    )
}

function ThemeMode() {
    const [theme, setTheme]=useState("light"); 

return(
<>
<LightTheme theme={theme} handleClick={setTheme} />
<DarkTheme theme={theme} handleClick={setTheme} />
</>

)

} 


export default ThemeMode;