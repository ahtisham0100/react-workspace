// Dashboard.jsx
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Desc from "./components/Desc";

// 4️⃣ Consume the context inside child components
function Dashboard() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
        <Navbar/>
<Desc/>
    </div>
  );
}

export default Dashboard;
// This component uses the `useContext` hook to access the current theme and the function to toggle it.