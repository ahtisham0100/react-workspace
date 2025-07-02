import { useContext } from "react"
import AuthContext from "./context/AuthContext"
import ThemeContext from "./context/ThemeContext"
import AiSuggestionContext from "./context/AiSuggestionContext"



function Dashboard() {
    let {theme, toggleTheme} = useContext(ThemeContext)
    let {isSuggestionEnabled, setIsSuggestionEnabled} = useContext(AiSuggestionContext)
    return (

        <div>
            {isSuggestionEnabled?<div>
                <p>AI Suggestions are enabled</p> <button onClick={() => setIsSuggestionEnabled(false)}>Disable AI Suggestions</button></div>:<button onClick={() => setIsSuggestionEnabled(true)}>Enable AI Suggestions</button>}
            <h1 className={theme}>Dashboard</h1>
            <p className={theme}>Current Theme: {theme}</p>
            {/* <p className={theme}>User: {user.name}</p>
            <p className={theme}>Email: {user.email}</p> */}
            <button onClick={()=>{
            toggleTheme();
            console.log("Theme toggled to:", theme);    
        }}>Toggle Theme</button>
        </div>
    )
}


export default Dashboard;