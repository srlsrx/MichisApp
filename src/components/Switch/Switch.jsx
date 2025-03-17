
function SwitchToggle({ checked, onChange }) {


  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        className="sr-only peer"
      />
      <div className="w-10 h-5 bg-gray-300 peer-checked:bg-gray-900 rounded-full transition duration-300"></div>
      <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full peer-checked:translate-x-5 transition-transform duration-300"></div>
    </label>
  );
}

export default SwitchToggle;