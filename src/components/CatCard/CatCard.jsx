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
    <article className="card-container flex flex-col items-end  shadow-lg shadow-blue-500/40 ring-2 ring-green-400/20 rounded-2xl overflow-hidden w-80 min-h-full transform transition duration-300 hover:scale-105" id={id} >
        <img className="w-full min-h-55 object-cover" src={url} alt="Gatito en adopción"/>
        <div className="card-body flex flex-col justify-between p-2 text-center bg-gray-200 h-full">
            <p className="mt-2 text-gray-700 text-sm">{breeds}</p>
            <p className="mt-2  text-gray-700 text-sm">{description}</p>            
            <Button />
        </div>
    </article>
  )
}

export default CatCard