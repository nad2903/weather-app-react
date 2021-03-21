import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather">
        <form id="search-engine">
          <div className="row">
            <div className="col-9">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search another city..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  id="search-city-input"
                  autoComplete="off"
                  autoFocus="on"
                />
              </div>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <span id="current-time">Last updated at 05:52 PM</span>
        </div>
        <div className="row">
          <h1 className="city" id="city">
            Toronto
          </h1>
        </div>
        <div className="row">
          <p className="today-date-time">
            {" "}
            <br />
            <span id="today-date">Monday March 8</span>
          </p>
        </div>
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
                  <a href="https://calculator-converter.com/celsius-to-fahrenheit.htm#" id="celsius" className="active">
                    ºC
                  </a>{" "}
                  / {" "}
                  <a href="https://calculator-converter.com/celsius-to-fahrenheit.htm" id="fahrenheit">
                    ºF
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="today-stats">
            <span id="weather-condition">Weather</span> <br />
            Feels like: <span id="feels-like">2º</span>
            <br />
            Humidity: <span id="humidity">61%</span> <br />
            Wind speed: <span id="wind-speed">16 km/h </span>
          </p>
        </div>
      </div>
    </div>
  );
}