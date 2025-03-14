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
    <div><button onClick={goToAdopt} className="mt-8 bg-teal-500 cursor-pointer text-white px-4 py-2 mb-8 rounded-full shadow-md hover:bg-green-400 transition">Adoptame</button></div>
  )
}

export default Button