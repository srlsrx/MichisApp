import React from "react";
import Lottie from "lottie-react";
import constructionAnimation from "../../assets/construction-animation.json";

/**
 * Componente `Adopt`
 *
 * Este componente muestra una página de "En Construcción" con una animación de Lottie
 * y un mensaje informativo.
 *
 * @author Nico Fernández
 * @component
 * @example
 * return (
 *   <Adopt />
 * )
 *
 * @returns {JSX.Element} Interfaz de usuario con animación y mensaje de construcción.
 */
const Adopt = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 w-full overflow-hidden">
      <Lottie animationData={constructionAnimation} className="w-[600px] mb-[-90px] mt-[-100px]" />
      <h1 className="text-[30px] font-bold text-[#317298] md:text-5xl lg:text-7xl">Página en Construcción</h1>
      <p className="text-xl mt-0 text-gray-700 max-w-[600px] md:text-3xl lg:text-4xl lg:mt-4">
        Estamos trabajando para ofrecerte una mejor experiencia. ¡Vuelve pronto!
      </p>
    </div>
  );
};

export default Adopt;