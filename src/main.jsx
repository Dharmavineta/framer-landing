import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import CursorProvider from "./context/CursorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CursorProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </CursorProvider>
);
