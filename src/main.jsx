import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

/** importamos BrowserRouter para envolver toda la aplicación y habilitar la navegacion de 
 * todas las rutas sin recargar la página usando el historial de navegación actualizando las URLs
 * 
 * @async 
 *   @returns
 *   @author {Ana Castro}
 */

createRoot(document.getElementById('root')).render(  
    <BrowserRouter>
      <App />
    </BrowserRouter>  
)
