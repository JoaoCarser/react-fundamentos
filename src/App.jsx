import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./components/App/Index.jsx";
import GlobalStyle from './styles/global.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Index />
  </React.StrictMode>
);
