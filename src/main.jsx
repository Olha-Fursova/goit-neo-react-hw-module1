// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/index.css";
import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App.jsx";
import "modern-normalize";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
