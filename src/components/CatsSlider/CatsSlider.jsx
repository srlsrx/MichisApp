import React, { useEffect, useState } from 'react';
import { TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";
import catService from '../../services/catServices';
import CatCard from '../CatCard/CatCard';
import './CatsSlider.css'

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
    }, [])

    const nextIndex = () => {
        setIndex((prev) => (prev + 1) % catArray.length);
    }

    const prevIndex =() => {
        setIndex((prev) => (prev - 1 + catArray.length) % catArray.length);
    }

    const printCards = catArray.length > 0
    ? Array.from({ length: 4 }, (_, i) => (
       <>
            <CatCard  id={catArray[(index + i) % catArray.length].id}
             key={catArray[(index + i) % catArray.length].id}
             url={catArray[(index + i) % catArray.length].url}/>
       </>
    ) ) : [];
 
  return (
    <div className="slider-container flex justify-center items-center h-screen gap-2 overflow-hidden">
      <button className="nav-button prev absolute top-[50%] left-40 bg-[#e25f23] text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-900 transition" onClick={prevIndex}>
      <TbPlayerTrackPrev />
      </button>
      <div className="card-container flex flex-row gap-6 overflow-x-auto p-4 h-100">
        {printCards}
      </div>
      <button className="nav-button next absolute top-[50%] right-40 bg-[#e25f23] text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-900 transition" onClick={nextIndex}>
      <TbPlayerTrackNext />
      </button>
    </div>
  )
}

export default CatsSlider