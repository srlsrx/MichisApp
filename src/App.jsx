import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      ¡Haz clic!
    </button>
    </>
  )
}

export default App
