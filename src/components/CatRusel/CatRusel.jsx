import {useContext, useEffect, useState}  from "react";
import {motion, AnimatePresence} from "framer-motion";
import {TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";
import CatCard from "../CatCard/CatCard";
import {HomeContext} from "../../contexts/HomeContext";
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
    const [printCardsResolution, setPrintCardsResolution] = useState(4)
    const [direction, setDirection] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const [selectedCat, setSelectedCat] = useState(null);
    const {homeList} = useContext(HomeContext);    


    const nextIndex = () => {
        if (isAnimating || homeList.length === 0) return;
        setIsAnimating(true);
        setDirection(1);

        setTimeout(() => {
            setIndex((prev) => (prev + printCardsResolution) % homeList.length);
            setIsAnimating(false);
        }, 100);
    };

    const prevIndex = () => {
        if (isAnimating || homeList.length === 0) return;
        setIsAnimating(true);
        setDirection(-1);

        setTimeout(() => {
            setIndex((prev) => (prev - printCardsResolution + homeList.length) % homeList.length);
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

    console.log("Lista de gatos:", homeList);
    console.log("Índice actual:", index);

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
                        {homeList.length > 0 &&
                            Array.from({ length: printCardsResolution }, (_, i) => {
                                const cardIndex = (index + i) % homeList.length;
                                return (
                                    // <div  className="max-h-120 max-w-70  flex">
                                        <CatCard
                                            key={homeList[cardIndex].id}
                                            action={() => setSelectedCat(homeList[cardIndex])}
                                            product={homeList[cardIndex]}
                                            id={homeList[cardIndex].id}
                                            url={homeList[cardIndex].url}
                                            breeds={homeList[cardIndex].breeds[0].name}
                                            description={
                                                homeList[cardIndex].breeds[0].description.slice(0, 150) + "..."}
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

export default CatRusel;
