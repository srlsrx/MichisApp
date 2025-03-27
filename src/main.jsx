import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

/** importamos BrowserRouter para envolver toda la aplicación y habilitar la navegacion de
 * todas las rutas sin recargar la página usando el historial de navegación actualizando las URLs
 *
 * @async
 *   @returns
 *   @author {Ana Castro}
 */

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <I18nextProvider i18n={i18n}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </I18nextProvider>
    </BrowserRouter>
);
