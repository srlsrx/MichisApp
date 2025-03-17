import { useState, useEffect } from "react";
import SwitchToggle from "./Switch";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const main = document.querySelector("main");
    if (main) {
      main.setAttribute("data-theme", theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme]); // Se ejecuta cuando `theme` cambia

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return(
    <div className="flex items-center gap-2">
        <span className="text-gray-500 dark:text-gray-400">☀️</span>
    <SwitchToggle onChange={toggleTheme} checked={theme === "dark"} />
    <span className="text-gray-500 dark:text-gray-400">🌙</span>
    </div>
  )
};

export default ThemeToggle;