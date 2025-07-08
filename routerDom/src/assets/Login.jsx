import { replace, useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()
    
    function handleLogin(e) {
        e.preventDefault(); // Prevent form submission
        // Here you would typically handle authentication logic
        // For this example, we'll just navigate to the home page
const username = "john_doe";
navigate(`/user/${username}`, { replace: true }); // Redirect to user profile

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