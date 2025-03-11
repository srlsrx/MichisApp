import React from 'react'

const CatsSlider = () => {
    const [index, setIndex] = useState(0);


    const catArray =["cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7", "cat8", "cat9", "cat10", "cat11", "cat12"];

    const nextIndex = () => {
        setIndex((prev) => {
            if(prev === catArray.length -1) {
                prev = 0;
            } else {
                prev +1;
            }            
        })
    }

    const prevIndex =() => {
        setIndex(() => {
            if(prev === 0) {
                prev = catArray.length -1;
            } else {
                prev -1;
            }
        })
    }

    const printCards = catArray.length > 0
    ? Array.from({ length: 4 }, (_, i) => catArray[(index + i) % catArray.length]) : [];
 
  return (
    <div className="slider-container">
      <button className="nav-button prev" onClick={prevIndex}>
        {"<"}
      </button>
      <div className="card-container">
        {slider}
      </div>
      <button className="nav-button next" onClick={nextIndex}>
        {">"}
      </button>
    </div>
  )
}

export default CatsSlider