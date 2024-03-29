import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
import Application from "./components/Application";
import Note from "./components/Note";
import "./index.css";
import App from "./App"

ReactDOM.render(  // activates additional checks and warnings
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://create-react-app.dev/docs/measuring-performance/
reportWebVitals();
