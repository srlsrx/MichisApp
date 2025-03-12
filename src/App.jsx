/** 
 * Route asocia una URL con cada componente 
 * @async
 * @returns
 * @author {Nico Fernández}
 */


import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import Adopt from './pages/Adopt/Adopt'
import './App.css'


function App() { 

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
