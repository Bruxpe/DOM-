import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    // me permite crear rutas en mi app.
    <BrowserRouter>  
        <App />        
    </BrowserRouter>,
    document.getElementById("root")
);
