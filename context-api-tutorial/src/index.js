import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CountContextProvider } from "./contexts/count";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountContextProvider>
      <App />
    </CountContextProvider>
  </React.StrictMode>
);
