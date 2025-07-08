import { replace, useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()
    
    function handleLogin(e) {
        e.preventDefault()

        navigate("/about", { replace: true });
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button onClick={handleLogin} type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;