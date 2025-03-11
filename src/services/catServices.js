
/**
 * Consulta a la API de CatApi y devuelve un array de imagenes de gatos
 *
 * @async
 * @returns {Object[]} 
 * @author {Ana Castro}
 */
async function catService ()  {
    try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=12`);
    if(!response.ok) throw new Error(console.error(response.status));
    const data = await response.json();
    return data;
    } catch (error) {
    console.error("Error al obtener la API de gatos:", error.message);       
    }
};

export default catService