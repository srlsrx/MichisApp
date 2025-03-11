import React from 'react';

const CatCard = (id, url) => {
  return (
    <article className="bg-white shadow-lg rounded-2xl overflow-hidden w-80 transform transition duration-300 hover:scale-105" key={id}>
        <img className="w-full h-48 object-cover" src={url} alt="Gatito en adopción"/>
        <div className="p-4 text-center">
            <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae ullamcorper sapien.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition`">Adoptame</button>
        </div>
    </article>
  )
}

export default CatCard