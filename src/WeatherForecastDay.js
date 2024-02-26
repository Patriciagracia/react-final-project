import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <div className="forecastIcon">
        <img src={props.data.condition.icon_url} alt="icon" />
      </div>
      <div className="forecastTemp">
        <span className="maxTemp">
          {Math.round(props.data.temperature.maximum)}
        </span>
        º{" "}
        <span className="minTemp">
          {Math.round(props.data.temperature.minimum)}
        </span>
        º{" "}
      </div>
    </div>
  );
}
