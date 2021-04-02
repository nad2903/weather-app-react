import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function WeatherData(props) {
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
            <div className="col-3"></div>
            <div className="col-3">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                id="current-icon"
              />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <h5 className="today-temp" id="today-temp">
                    {Math.round(props.data.temp)}º
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
              <span className="text-capitalize" id="weather-condition">{props.data.description}</span> <br />
              Feels like: <span id="feels-like">{Math.round(props.data.feelsLike)}º</span>
              <br />
              Humidity: <span id="humidity">{Math.round(props.data.humidity)}%</span> <br />
              Wind speed: <span id="wind-speed">{Math.round(props.data.wind)} km/h </span>
            </p>
          </div>
        </div>
    )
}