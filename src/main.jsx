// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store'
import { ThemeProvider } from "./contexts/ThemeContext";
import App from "./App.jsx";
import "./index.css";
import "remixicon/fonts/remixicon.css";

// Base URL dinámica para desarrollo y producción
const getBasename = () => {
  // Para desarrollo local
  if (import.meta.env.DEV) return '/';
  
  // Para producción (GitHub Pages)
  // Si estás en la página de usuario o el repo se llama 'laurapajaro-cpu.github.io'
  if (window.location.hostname === 'laurapajaro-cpu.github.io') {
    // Verifica si estamos en un repositorio de proyecto
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    if (pathSegments[0] && pathSegments[0] !== 'rts-clone') {
      return `/${pathSegments[0]}/`;
    }
    return '/rts-clone/';
  }
  
  return '/';
};

const BASENAME = getBasename();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter basename={BASENAME}>
      <ThemeProvider>
          <App />
      </ThemeProvider>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
