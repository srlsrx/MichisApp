import React from "react";
import Lottie from "lottie-react";
import constructionAnimation from "../../assets/construction-animation.json";

const Adopt = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 w-full">
      <Lottie animationData={constructionAnimation} className="w-[500px] mb-4" />
      <h1 className="text-6xl font-bold text-[#317298]">Página en Construcción</h1>
      <p className="text-lg text-gray-700 max-w-md">
        Estamos trabajando para ofrecerte una mejor experiencia. ¡Vuelve pronto! 😊
      </p>
    </div>
  );
};

export default Adopt;