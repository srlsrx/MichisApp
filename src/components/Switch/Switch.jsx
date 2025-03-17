import { HiSun, HiMoon } from "react-icons/hi";

function SwitchToggle({ checked, onChange }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        className="sr-only peer"
      />
      <div className="w-12 h-6 bg-gray-300 peer-checked:bg-gray-900 rounded-full flex items-center justify-between px-1 transition duration-300">
        <HiSun className="dark:text-gray-100 text-gray-900 transition-colors duration-500" />
        <HiMoon className="dark:text-gray-100 text-gray-900 transition-colors duration-500" />
      </div>
      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition-transform duration-300"></div>
    </label>
  );
}

export default SwitchToggle;