import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Osaka</h1>
      <ul>
        <li>Friday 07:10</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">WEATHER ICON 6ºC</div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 76%</li>
            <li>Wind: 12 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
