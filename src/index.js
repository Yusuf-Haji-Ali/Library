import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faBars,
  faBolt,
  faTimes,
  faBookOpen,
  faStarHalfAlt,
  faArrowLeft,
  faStar,
  faTags,
  faHouse,
  faUser,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBookOpen,
  faTimes,
  faBars,
  faArrowLeft,
  faShoppingCart,
  faBolt,
  faStarHalfAlt,
  faTags,
  faStar,
  faHouse,
  faUser,
  faSpinner
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
