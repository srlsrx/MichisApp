import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import SwitchToggle from "./Switch";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-2">
      <SwitchToggle onChange={toggleTheme} checked={theme === "dark"} />
    </div>
  );
};

export default ThemeToggle;