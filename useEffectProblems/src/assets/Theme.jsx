import { useEffect, useState } from "react";

function Theme() {
  const [theme, setTheme] = useState("light");

  // 🧠 Apply body.className = "dark" or "light" based on `theme`
  useEffect(()=>{
// document.body.className=theme; //as this might remove other classes in body such as tailwind or other 3rd party apps;
document.body.classList.remove("light","dark");
document.body.classList.add(theme)

  },[theme])

  return <button onClick={() => setTheme(t => t === "light" ? "dark" : "light")}>Toggle</button>;
}
 
export default Theme;