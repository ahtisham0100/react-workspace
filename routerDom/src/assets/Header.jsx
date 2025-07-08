import { NavLink } from "react-router-dom";


function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink className={({isActive})=> isActive ? "active": ""} to="/" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> isActive ? "active": ""} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> isActive ? "active": ""} to="/contact">Contact</NavLink>
                    </li> 
                    <li> 
                        <NavLink className={({isActive})=> isActive ? "active": ""} to="/Login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
} 

export default Header;