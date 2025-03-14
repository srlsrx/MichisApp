import React from 'react';
import Button from '../Button/Button';

/** 
 * configuramos la card y le damos estilos
 * @async
 * @returns
 * @author {Ana Castro}
 */

const CatCard = ({id, url}) => {
  return (
    <article className="card-container shadow-lg shadow-blue-500/40 ring-2 ring-green-400/20 rounded-2xl overflow-hidden w-80 h-[100%] transform transition duration-300 hover:scale-105" id={id}>
        <img className="w-full h-55 object-cover" src={url} alt="Gatito en adopción"/>
        <div className="card-body p-4 text-center bg-gray-200 ">
            <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae ullamcorper sapien.</p>
            <Button  />
        </div>
    </article>
  )
}

export default CatCard