import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./Index.jsx";
import Header from "./Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header title="Carser's Blog">
      <h2>Posts da Semana</h2>
    </Header>
    <Index />
  </React.StrictMode>
);
