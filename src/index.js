import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app.jsx";
import GlobalStyles from "./components/globalStyles";
import AuthService from "./service/auth_service";
import firebaseApp from "./service/firebase";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input";

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
