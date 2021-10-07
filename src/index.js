import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app.jsx";
import GlobalStyles from "./components/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
