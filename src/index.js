import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import(data);

const message = "Hello";
ReactDOM.render(
  <React.StrictMode>
    <h2>Hello</h2>
    <App nickName="Tatiana" message="say hello" />
    <h2>{message}</h2>
  </React.StrictMode>,
  document.getElementById("root")
);
