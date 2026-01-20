import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store'

import App from "./App.jsx";
import "./index.css";
import "remixicon/fonts/remixicon.css";

// ✅ BrowserRouter basename debe ser BASE_URL sin trailing slash
//    BASE_URL: "/" (dev) o "/RTS/" (prod o si lo corrés así en dev)
const BASENAME = import.meta.env.BASE_URL.replace(/\/$/, "");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={BASENAME}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
