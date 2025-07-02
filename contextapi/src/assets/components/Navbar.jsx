import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

 function Navbar () {
let {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <nav className={`bg-gray-900 text-white shadow-md ${theme}`}>
            <div className={`max-w-7xl mx-auto px-4 py-3 flex items-center justify-between ${theme}`}>
                {/* Logo/Brand */}
                <div className={`text-2xl font-bold tracking-tight ${theme}`}>
                    MyPortfolio
                </div>
                {/* Navigation Links */}
                <ul className={`flex space-x-6 ${theme}`}>
                    <li>
                        <a href="#home" className={`hover:text-blue-400 transition-colors ${theme}`}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className={`hover:text-blue-400 transition-colors ${theme}`}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className={`hover:text-blue-400 transition-colors ${theme}`}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className={`hover:text-blue-400 transition-colors ${theme}`}>
                            Contact
                        </a>
                    </li>

                     <li>
                       <button onClick={()=>{
                            toggleTheme();
                       }}>Change Theme</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;