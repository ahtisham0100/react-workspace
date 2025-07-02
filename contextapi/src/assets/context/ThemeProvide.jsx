import { useContext, useMemo, useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return(
        <ThemeContext.Provider value={useMemo(() => ({ theme, toggleTheme }), [theme])}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;