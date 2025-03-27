# 🐱 MichisApp

**MichisApp** es una aplicación web moderna desarrollada con **React** y **Vite** que permite a los usuarios explorar, adoptar y gestionar sus gatos favoritos. Incluye un carrusel interactivo, formulario de adopción con validación, sistema de favoritos persistente y soporte para temas claro/oscuro e internacionalización.

---


## ✨Características

- 🎠 **Carrusel de Gatos**: Navega entre adorables gatos en un carrusel dinámico.
- 🐾 **Formulario de Adopción**: Envía solicitudes con validación y buena experiencia de usuario.
- 💖 **Favoritos Persistentes**: Añade o elimina gatos favoritos, guardados en `localStorage`.
- 🌗 **Modo Claro/Oscuro**: Interfaz adaptable según tus preferencias visuales.
- 🌍 **Soporte Multilenguaje**: Disponible en español e inglés gracias a `react-i18next`.
- 🎞️ **Animaciones Lottie**: Animaciones elegantes para páginas de error o en construcción.

---

## 📁 Estructura del Proyecto

```bash
MichisApp/
├── public/             # Archivos estáticos
│   └── images/         # Imágenes del proyecto
├── src/                # Código fuente
│   ├── components/     # Componentes reutilizables (Header, Footer, Modal, etc.)
│   ├── contexts/       # Contextos globales (favoritos, tema, home)
│   ├── locales/        # Archivos de traducción (i18n)
│   ├── pages/          # Vistas principales (Home, Adopción)
│   ├── services/       # Servicios externos (API)
│   └── App.jsx         # Componente raíz y enrutamiento
├── docs/               # Documentación JSDoc
├── .env                # Variables de entorno
├── package.json        # Dependencias y scripts
└── vite.config.js      # Configuración del entorno Vite
```

---

## 🧩 Componentes Principales

| Componente     | Descripción                                                                 | Archivo                                                          |
|----------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------|
| **Header**     | Barra superior con navegación y botón para abrir el menú lateral            | `src/components/Header/Header.jsx`                               |
| **Footer**     | Pie de página con créditos y enlaces                                        | `src/components/Footer/Footer.jsx`                               |
| **CatCard**    | Tarjeta individual de gato con imagen, nombre y botones de interacción      | `src/components/CatCard/CatCard.jsx`                             |
| **Modal**      | Componente genérico para mostrar contenido emergente                        | `src/components/Modal/Modal.jsx`                                 |
| **AdoptForm**  | Formulario para gestionar solicitudes de adopción con validaciones          | `src/components/AdoptForm/AdoptForm.jsx`                         |

---

## 🌐 Contextos

| Contexto             | Descripción                                                                 | Archivo                                       |
|----------------------|-----------------------------------------------------------------------------|-----------------------------------------------|
| **FavoritesContext** | Gestiona la lógica de favoritos usando `useReducer` y `localStorage`        | `src/contexts/FavoritesContext.jsx`           |
| **HomeContext**      | Proporciona la lista de gatos desde el API para la página principal         | `src/contexts/HomeContext.jsx`                |
| **ThemeContext**     | Controla el cambio entre tema claro y oscuro                                | `src/contexts/ThemeContext.jsx`               |

---

## 🔧 Servicios

| Servicio       | Descripción                                                           | Archivo                                  |
|----------------|-----------------------------------------------------------------------|------------------------------------------|
| **CatService** | Conecta con la Cat API para obtener imágenes de gatos aleatorios      | `src/services/catServices.js`            |

---

## 🌍 Internacionalización

La aplicación está preparada para funcionar en varios idiomas utilizando `react-i18next`. Actualmente se incluyen los siguientes idiomas:

- 🇪🇸 **Español** → [`es.json`](src/locales/es.json)
- 🇬🇧 **Inglés** → [`en.json`](src/locales/en.json)

Los textos se gestionan desde los archivos JSON en la carpeta `locales`.

---

## 👨‍💻 Autores

Este proyecto ha sido desarrollado por estudiantes del bootcamp **Factoria F5**:

- **Nico Fernández** 
- **Ana Castro**
- **Ángel Aragón**

---

## 📄 Licencia

Este proyecto está protegido bajo la licencia de uso de **Factoria F5**.  
Todos los derechos reservados © 2025.

---

