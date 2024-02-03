import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          {" "}
          This project is created by Patricia Gracia.{" "}
          <a
            href="https://github.com/Patriciagracia/react-final-project"
            target="_blank"
          >
            {" "}
            Open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
