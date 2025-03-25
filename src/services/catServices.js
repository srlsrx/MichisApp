import axios from "axios";


/**
 * Consulta a la API de CatApi y devuelve un array de imagenes de gatos
 *
 * @async
 * @returns {Object[]} 
 * @author {Ana Castro}
 */


const CatService = async () => {
    try {
        const response = await axios.get(
            "https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1",
            {
              headers: {
                "x-api-key": import.meta.env.VITE_API_KEY, 
              },
            }
          );
             
    return response.data;   
    } catch (error) {
    console.error("Error fetching data:", error);      
    }
};
   








export default CatService;