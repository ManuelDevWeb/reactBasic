// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
//Importando componente App
import App from "./components/App";
//Importando bootstrap
import "bootstrap/dist/css/bootstrap.css";
//Importando estilos
import "./components/styles/global.css";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
