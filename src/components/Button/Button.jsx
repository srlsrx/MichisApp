import React from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * @async
 * @returns {JSX.element}
 * @author {Ana Castro}
 */

const Button = () => {
    const navigate = useNavigate();
    
    const goToAdopt = () => {
        navigate("/Adopt")
    }
  return (    
    <div><button onClick={goToAdopt} className="mt-4  cursor-pointer bg-[#e25f23] text-white px-4 py-2 mb-8 rounded-full shadow-md hover:bg-blue-600 transition">Adoptame</button></div>
  )
}

export default Button