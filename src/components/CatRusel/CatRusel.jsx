import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";
import CatService from "../../services/catServices";
import CatCard from "../CatCard/CatCard";
import "./CatRusel.css";

/**
 * Importamos los datos desde catService y la card desde
 * CatCard para visionarlos  y ordenarlos en el carrusel CatsSlider
 * @async
 * @returns
 * @author {Ana Castro}
 */

const CatRusel = () => {
    const [index, setIndex] = useState(0);
    const [catArray, setCatArray] = useState([]);
    const [printCardsResolution, setPrintCardsResolution] = useState(4)
    const [direction, setDirection] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const [selectedCat, setSelectedCat] = useState(null);

    async function CatsPhotos() {
        try {
            const data = await CatService();
            setCatArray(data);
        } catch (error) {
            console.error("Error en CatCard:", error);
        }
    }

    useEffect(() => {
        CatsPhotos();
    }, []);

    const nextIndex = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(1);

        setTimeout(() => {
            setIndex((prev) => (prev + printCardsResolution) % catArray.length);
            setIsAnimating(false);
        }, 100);
    };

    const prevIndex = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(-1);

        setTimeout(() => {
            setIndex((prev) => (prev - printCardsResolution + catArray.length) % catArray.length);
            setIsAnimating(false);
        }, 100);
    };

    useEffect(() => {
        const printCardsResolution = () => {
            console.log("Evento resize activado. Ancho:", window.innerWidth);
            const width = window.innerWidth;
            let newCount;

            if (width < 700) newCount = 1;
            else if (width < 1000) newCount = 2;
            else if (width < 1200) newCount = 3;
            else newCount = 4;

            console.log("Nuevo número de tarjetas:", newCount);
            setPrintCardsResolution(newCount);
        }

        printCardsResolution();
        window.addEventListener("resize", printCardsResolution);
        return () => window.removeEventListener("resize", printCardsResolution);
    }, []);

    return (
        <div className="w-[100%] slider-container flex justify-center items-center box-content">
            <button className="nav-button cursor-pointer prev md:ml-6 bg-transparent hover:bg-gradient-to-r to-[#44B8A7] from-[#4FC560] text-[#44B8A7] hover:text-gray-100 dark:hover:text-gray-600 text-xl border-2 flex justify-center items-center rounded-full shadow-md w-12 h-10 md:w-12 md:h-12 transition" onClick={prevIndex}>
                <TbPlayerTrackPrev />
            </button>
            <div className="p-4 w-[80%] grid justify-items-center grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={`${index}-${printCardsResolution}`}
                        initial={{ x: direction * 100 + "%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        exit={{ x: -direction * 100 + "%", opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="flex gap-6 px-3 py-6 min-h-80 justify-center"
                    >
                        {catArray.length > 0 &&
                            Array.from({ length: printCardsResolution }, (_, i) => {
                                const cardIndex = (index + i) % catArray.length;
                                return (
                                    <CatCard
                                        key={catArray[cardIndex].id}
                                        action={() => setSelectedCat(catArray[cardIndex])}
                                        product={catArray[cardIndex]}
                                        id={catArray[cardIndex].id}
                                        url={catArray[cardIndex].url}
                                        breeds={catArray[cardIndex].breeds[0].name}
                                        description={
                                            catArray[cardIndex].breeds[0].description.slice(0, 150) + "..."}
                                    />
                                );
                            })}
                    </motion.div>
                </AnimatePresence>
            </div>
            <button className="nav-button cursor-pointer prev md:mr-6 bg-transparent hover:bg-gradient-to-r to-[#44B8A7] from-[#4FC560] text-[#44B8A7] hover:text-gray-100 dark:hover:text-gray-600 text-xl border-2 flex justify-center items-center rounded-full shadow-md w-12 h-10 md:w-12 md:h-12 transition" onClick={nextIndex}>
                <TbPlayerTrackNext />
            </button>
        </div>
    );
};

export default CatRusel;
