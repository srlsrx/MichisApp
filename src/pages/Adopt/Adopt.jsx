import React from "react";
import Lottie from "lottie-react";
import constructionAnimation from "../../assets/construction-animation.json";

const Adopt = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 w-full">
      <Lottie animationData={constructionAnimation} className="w-[600px] mb-[-90px] mt-[-100px]" />
      <h1 className="text-6xl font-bold text-[#317298]">Página en Construcción</h1>
      <p className="text-3xl text-gray-700 max-w-[600px]">
        Estamos trabajando para ofrecerte una mejor experiencia. ¡Vuelve pronto!
      </p>
    </div>
  );
};

export default Adopt;