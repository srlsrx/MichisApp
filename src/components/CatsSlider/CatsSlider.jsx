import React, { useState } from 'react';
import catService from '../../services/catServices';



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
    

    const nextIndex = () => {
        setIndex((prev) => (prev + 1) % catArray.length);
    }

    const prevIndex =() => {
        setIndex((prev) => (prev - 1 + catArray.length) % catArray.length);
    }

    const printCards = catArray.length > 0
    ? Array.from({ length: 4 }, (_, i) => (
        <div key={i}>
            {catArray[(index + i) % catArray.length].id}
        </div>
    ) ) : [];


 
  return (
    <div className="slider-container">
      <button className="nav-button prev" onClick={prevIndex}>
        {"<"}
      </button>
      <div className="card-container">
        {printCards}
      </div>
      <button className="nav-button next" onClick={nextIndex}>
        {">"}
      </button>
    </div>
  )
}

export default CatsSlider