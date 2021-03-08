import React from "react";

import "./Current.css";

export default function Current() {
  return (
    <div className="Current">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="Weather condition"
            id="current-icon"
          />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <h5 className="today-temp" id="today-temp">
                6º
              </h5>
            </div>
            <div className="col">
              <span id="unit-links">
                <a href="#" id="celsius" className="active">
                  ºC
                </a>{" "}
                /
                <a href="#" id="fahrenheit">
                  ºF
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}