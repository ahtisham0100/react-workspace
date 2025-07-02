import { useState } from "react";
import AuthContext from "./AuthContext";
import LoginPage from "../LoginPage";


function AuthProvider({children}) {
let [isAuthenticated, setIsAuthenticated] = useState(false); 
let [user, setUser] = useState({name: "John Doe", email: "john.doe@example.com"});

return (
    <AuthContext.Provider value={{ isAuthenticated, user, setUser, setIsAuthenticated }}>
    </AuthContext.Provider>
);
}
export default AuthProvider;
