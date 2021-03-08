import React from "react";

import "./Stats.css";

export default function Stats() {
  return (
    <div className="row">
      <p className="today-stats">
        <span id="weather-condition">Weather</span> <br />
        Feels like: <span id="feels-like">-5º</span>
        <br />
        Humidity: <span id="humidity">65%</span> <br />
        Wind speed: <span id="wind-speed">22 km/h </span>
      </p>
    </div>
  );
}