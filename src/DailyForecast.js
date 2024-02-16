import React from "react";
import Weather from "./Weather.js";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "e4167474503t4a0o133bbfcc9fa69a38";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <div className="forecastIcon">icon</div>
          <div className="forecastTemp">
            <span className="maxTemp">19</span>{" "}
            <span className="minTemp">10</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
