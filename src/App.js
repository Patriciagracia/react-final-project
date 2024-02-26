import React from "react";
import Weather from "./Weather.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Mahón" />
        <footer>
          {" "}
          👩🏻‍💻 This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/patricia-gracia/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Patricia Gracia{" "}
          </a>{" "}
          and is open-sourced on
          <a
            href="https://github.com/Patriciagracia/react-final-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
