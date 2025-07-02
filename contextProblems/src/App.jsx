import AiProvider from "./assets/context/AiProvider"
import AuthProvider from "./assets/context/AuthProvider"
import { NotificationProvider } from "./assets/context/NotificationProvider"
import ThemeProvider from "./assets/context/ThemeProvider"
import Dashboard from "./assets/Dashboard"


function App() {

  return (
    <>
    <AiProvider> 
      <ThemeProvider>
        <Dashboard/>
        <NotificationProvider/>

      </ThemeProvider>
      </AiProvider>

    </>
  )
}

export default App
