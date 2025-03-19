import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";

/**
 * @async
 * @returns {JSX.element}
 * @author {Ana Castro}
 */

const Button = () => {
  const { t } = useTranslation();

    const navigate = useNavigate();
    
    const goToAdopt = () => {
        navigate("/Adopt")
    }
  return (    
    <div><button onClick={goToAdopt} className="bg-teal-500 justify-self-end cursor-pointer text-white px-4 py-2 mb-4 mt-4 rounded-full shadow-md hover:bg-green-400 transition">{t("adopt_me")}</button></div>
  )
}

export default Button