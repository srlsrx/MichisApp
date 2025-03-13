import React, { useEffect, useState } from "react";
import { TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";
import catService from "../../services/catServices";
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
      const data = await catService();
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
            if(width < 600) setHowManyCards(1);
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
            <>
                <CatCard  id={catArray[(index + i) % catArray.length].id}
                    key={catArray[(index + i) % catArray.length].id}
                    url={catArray[(index + i) % catArray.length].url}/>
            </>
    ) ) : [setHowManyCards];

 
  return (
    <div className="slider-container flex justify-center items-center gap-2">
      <button className="nav-button prev top-[50%] left-40 bg-[#e25f23] text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-900 transition" onClick={prevIndex}>
        <TbPlayerTrackPrev />
      </button>
      <div className="card-container flex gap-6 overflow-x-auto p-4 h-100">
        {printCards}
      </div>
      <button className="nav-button next top-[50%] right-40 bg-[#e25f23] text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-900 transition" onClick={nextIndex}>
        <TbPlayerTrackNext />
      </button>
    </div>
  );
};

export default CatsSlider;
