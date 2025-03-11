import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import Adopt from './pages/Adopt/Adopt'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/adopt" element = {<Adopt />} />
            <Route path="*" element = {< Navigate to = "/" />} />
        </Routes>
      
    </>
  )
}

export default App
