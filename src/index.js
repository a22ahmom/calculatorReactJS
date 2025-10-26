import React from "react";
import {createRoot} from "react-dom/client";
import Calculator from "./components/calculator";
import './index.css';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Calculator/>
    </React.StrictMode>
);