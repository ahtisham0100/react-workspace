import React, { useContext, useState } from "react";
import AuthContext from "./context/AuthContext";
const LoginPage = () => {
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
   const  {setUser , setIsAuthenticated} = useContext(AuthContext);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy authentication logic
        if (form.username === "admin" && form.password === "password") {
          setIsAuthenticated(true);
            setUser({ name: "Admin", email: "admin@example.com" });
            alert("Login successful!");
        } 
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2>Login</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    style={styles.input}
                    autoComplete="username"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    style={styles.input}
                    autoComplete="current-password"
                />
                {error && <div style={styles.error}>{error}</div>}
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
    },
    form: {
        background: "#fff",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        minWidth: "300px",
    },
    input: {
        margin: "0.5rem 0",
        padding: "0.75rem",
        fontSize: "1rem",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    button: {
        marginTop: "1rem",
        padding: "0.75rem",
        fontSize: "1rem",
        borderRadius: "4px",
        border: "none",
        background: "#007bff",
        color: "#fff",
        cursor: "pointer",
    },
    error: {
        color: "red",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        fontSize: "0.9rem",
    },
};

export default LoginPage;