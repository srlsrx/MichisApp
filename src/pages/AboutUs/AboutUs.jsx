import React from "react";
import Lottie from "lottie-react";
import constructionAnimation from "../../assets/construction-animation.json";
import { useTranslation } from "react-i18next";

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
const AboutUs = () => {
    const {t} = useTranslation()
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-190px)] text-center bg-transparent px-6 w-full">
            <Lottie
                animationData={constructionAnimation}
                className="w-[380px] md:w-[550px] mb-[-50px] mt-[-100px]"
            />
            <h1 className="text-[30px] font-bold text-[#44B8A7] md:text-5xl lg:text-7xl">
                {t("construction")}
            </h1>
            <p className="text-xl mt-0 dark:text-gray-200 text-gray-700 max-w-[600px] md:text-3xl lg:text-4xl lg:mt-4">
                {t("construction_text")}
            </p>
        </div>
    );
};

export default AboutUs;
