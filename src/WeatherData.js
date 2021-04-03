import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function WeatherData(props) {
    const [units, setUnits] = useState("metric");

    function showImperial(event) {
      event.preventDefault();
      setUnits("imperial");
    }

    function showMetric(event) {
      event.preventDefault();
      setUnits("metric");
    }

    if (units === "metric") {
      return (
        <div className="WeatherData">
          <div className="row" id="current-time">
            <FormattedTime data={props.data.currentTime} />
          </div>
          <div className="row">
            <h1 className="city" id="city">
              {props.data.city}
            </h1>
          </div>
          <div className="row">
            <p className="today-date-time">
              {" "}
              <br />
              <FormattedDate data={props.data.currentTime} />
            </p>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-3">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                id="current-icon"
              />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4">
                  <h5 className="today-temp" id="today-temp">
                    {Math.round(props.data.temp)}º
                  </h5>
                </div>
                <div className="col">
                  <span id="unit-links">
                      ºC{" "}
                    / {" "}
                    <a href="/" id="fahrenheit" onClick={showImperial}>
                      ºF
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <p className="today-stats">
              <span className="text-capitalize" id="weather-condition">{props.data.description}</span> <br />
              Feels like: <span id="feels-like">{Math.round(props.data.feelsLike)}º</span>
              <br />
              Humidity: <span id="humidity">{Math.round(props.data.humidity)}%</span> <br />
              Wind speed: <span id="wind-speed">{Math.round(props.data.wind)} km/h </span>
            </p>
          </div>
        </div>
      );
    } else {
      let imperialTemp = (props.data.temp * 9/5) + 32;
      let imperialFeelsLike = (props.data.feelsLike * 9/5) + 32;
      let imperialWind = props.data.wind / 1.609;
      return (
        <div className="WeatherData">
          <div className="row" id="current-time">
            <FormattedTime data={props.data.currentTime} />
          </div>
          <div className="row">
            <h1 className="city" id="city">
              {props.data.city}
            </h1>
          </div>
          <div className="row">
            <p className="today-date-time">
              {" "}
              <br />
              <FormattedDate data={props.data.currentTime} />
            </p>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-3">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                id="current-icon"
              />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4">
                  <h5 className="today-temp" id="today-temp">
                    {Math.round(imperialTemp)}º
                  </h5>
                </div>
                <div className="col">
                  <span id="unit-links">
                    <a href="/" id="celsius" onClick={showMetric}>
                      ºC
                    </a>{" "}
                    / {" "}
                    ºF
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <p className="today-stats">
              <span className="text-capitalize" id="weather-condition">{props.data.description}</span> <br />
              Feels like: <span id="feels-like">{Math.round(imperialFeelsLike)}º</span>
              <br />
              Humidity: <span id="humidity">{Math.round(props.data.humidity)}%</span> <br />
              Wind speed: <span id="wind-speed">{Math.round(imperialWind)} mph </span>
            </p>
          </div>
        </div>
      );
    }
}