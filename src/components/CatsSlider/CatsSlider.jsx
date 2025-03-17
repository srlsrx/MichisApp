import React, { useEffect, useState } from "react";
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
    setIndex((prev) => (prev + 1) % catArray.length);
  };

  const prevIndex = () => {
    setIndex((prev) => (prev - 1 + catArray.length) % catArray.length);
  };


    useEffect(() => {
        const changeManyCards = () => {
            const width = window.innerWidth;
            if(width < 500) setHowManyCards(1);
            else if(width < 900) setHowManyCards(2);
            else if(width < 1000) setHowManyCards(3);
            else setHowManyCards(4)
        }      

        changeManyCards();
        window.addEventListener("resize", changeManyCards);
        return () => window.removeEventListener("resize", changeManyCards);
        }, []);

        const printCards = catArray.length > 0
        ? Array.from({ length: howManyCards }, (_, i) => (
           
                <CatCard  id={catArray[(index + i) % catArray.length].id}
                    key={catArray[(index + i) % catArray.length].id}
                    url={catArray[(index + i) % catArray.length].url}
                    breeds={catArray[(index + i) % catArray.length].breeds[0].name}   
                    description = {catArray[(index + i) % catArray.length].breeds[0].description.slice(0, 150) + "..."}
                    />                    
          
    ) ) : [null];

 
  return (
    <div className="slider-container flex justify-around items-center gap-2 box-content">
      <button className="nav-button cursor-pointer prev md:ml-6 bg-gray-100 hover:bg-gradient-to-r to-[#44B8A7] from-[#4FC560] text-[#44B8A7] hover:text-gray-100 text-xl border-2 flex justify-center items-center rounded-full shadow-md w-12 h-10 md:w-12 md:h-12 transition" onClick={prevIndex}>
        <TbPlayerTrackPrev />
      </button>
      <div className="flex gap-6 overflow-x-auto px-3 py-6 min-h-80 mx-[-10px]">
        {printCards}
      </div>
      <button className="nav-button cursor-pointer prev md:mr-6 bg-gray-100 hover:bg-gradient-to-r to-[#44B8A7] from-[#4FC560] text-[#44B8A7] hover:text-gray-100 text-xl border-2 flex justify-center items-center rounded-full shadow-md w-12 h-10 md:w-12 md:h-12 transition" onClick={nextIndex}>
        <TbPlayerTrackNext />
      </button>
    </div>
  );
};

export default CatsSlider;
