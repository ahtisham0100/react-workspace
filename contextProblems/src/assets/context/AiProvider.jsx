import { useMemo, useState } from "react";
import AiSuggestionContext from "./AiSuggestionContext";

function AiProvider({children}) {
    
const [isSuggestionEnabled, setIsSuggestionEnabled] = useState(false);

const toggleSuggestion = () => {
    setIsSuggestionEnabled((prev) => !prev);
};

    return(
        <AiSuggestionContext.Provider value={useMemo(()=>{return {isSuggestionEnabled, toggleSuggestion , setIsSuggestionEnabled}},[isSuggestionEnabled])}>
            {children}  
        </AiSuggestionContext.Provider>
    )
} 


export default AiProvider;