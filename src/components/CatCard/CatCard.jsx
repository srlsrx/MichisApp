import React from 'react';
import Button from '../Button/Button';

/** 
 * configuramos la card y le damos estilos
 * @async
 * @returns
 * @author {Ana Castro}
 */

const CatCard = ({id, url, breeds, description}) => {
  return (
    <article className="card-container flex flex-col shadow-lg shadow-blue-500/40 ring-2 ring-green-400/20 rounded-2xl overflow-hidden w-80 min-h-full transform transition duration-300 hover:scale-105" id={id} >
        <img className="w-full min-h-55 max-h-55 object-cover" src={url} alt="Gatito en adopción"/>        
        <p className="mt-2 text-tealg-500 font-bold text-xl">{breeds}</p>
        <p className="mt-2 px-7 text-justify min-h-22 text-gray-700 text-sm">{description}</p>            
        <Button />        
    </article>
  )
}

export default CatCard