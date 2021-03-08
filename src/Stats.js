import React from "react";

import "./Stats.css";

export default function Stats() {
  return (
    <div className="row">
      <p className="today-stats">
        <span id="weather-condition">Weather</span> <br />
        Feels like: <span id="feels-like">2º</span>
        <br />
        Humidity: <span id="humidity">61%</span> <br />
        Wind speed: <span id="wind-speed">16 km/h </span>
      </p>
    </div>
  );
}