import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Canvas from "./canvas";
import { motion } from "framer-motion";
import imgTitle from "./title.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
const handleStart = () => {};

root.render(
  <React.StrictMode>
    <section>
      <div className="bg-black min-h-screen">
        <div className="flex flex-col item-center justify-center">
          <div className="flex item-center justify-center py-20">
            <button>
              <a href="https://ku3ds-tv-service.vercel.app">
                <img src={imgTitle} width={400} />
              </a>
            </button>
          </div>
          <div className="flex flex-col item-center justify-center py-10">
            <App />
          </div>
        </div>
      </div>
    </section>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
