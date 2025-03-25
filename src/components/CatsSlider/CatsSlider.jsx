import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";
import CatService from "../../services/catServices";
import CatCard from "../CatCard/CatCard";
import "./CatsSlider.css";

/**
 * Importamos los datos desde catService y la card desde
 * CatCard para visionarlos  y ordenarlos en el carrusel CatsSlider
 * @async
 * @returns
 * @author {Ana Castro}
 */

const CatsSlider = () => {
    const [index, setIndex] = useState(0);
    const [catArray, setCatArray] = useState([]);
    const [howManyCards, setHowManyCards] = useState(4)
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
            setIndex((prev) => (prev + howManyCards) % catArray.length);
            setIsAnimating(false);
        }, 500);
    };

    const prevIndex = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(-1);

        setTimeout(() => {
            setIndex((prev) => (prev - howManyCards + catArray.length) % catArray.length);
            setIsAnimating(false);
        }, 500);
    };

    useEffect(() => {
        const changeManyCards = () => {
            const width = window.innerWidth;
            if (width < 500) setHowManyCards(1);
            else if (width < 900) setHowManyCards(2);
            else if (width < 1000) setHowManyCards(3);
            else setHowManyCards(4)
        }

        changeManyCards();
        window.addEventListener("resize", changeManyCards);
        return () => window.removeEventListener("resize", changeManyCards);
    }, []);

    return (
        <div className="w-[100%] h-auto slider-container flex justify-center items-center gap-2 box-content">
            <button className="nav-button cursor-pointer prev md:ml-6 bg-transparent hover:bg-gradient-to-r to-[#44B8A7] from-[#4FC560] text-[#44B8A7] hover:text-gray-100 dark:hover:text-gray-600 text-xl border-2 flex justify-center items-center rounded-full shadow-md w-12 h-10 md:w-12 md:h-12 transition" onClick={prevIndex}>
                <TbPlayerTrackPrev />
            </button>
            <div className="w-[100%] p-2 justify-center flex transition overflow-hidden duration-300 mx-[-10px]">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={index}
                        initial={{ x: direction * 100 + "%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        exit={{ x: -direction * 100 + "%", opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="flex gap-6 px-3 py-6 min-h-80 justify-center"
                    >
                        {catArray.length > 0 &&
                            Array.from({ length: howManyCards }, (_, i) => {
                                const cardIndex = (index + i) % catArray.length;
                                return (
                                    // <div  className="max-h-120 max-w-70  flex">
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
                                    // </div>
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

export default CatsSlider;
