import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app.jsx";
import GlobalStyles from "./components/globalStyles";
import AuthService from "./service/auth_service";
import firebaseApp from "./service/firebase";

const authService = new AuthService(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
