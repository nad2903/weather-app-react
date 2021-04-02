import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({loaded: false});
  const apiKey = "b3a63df8beace64c182e708181f083a8";
  let city = "Toronto"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  function handleResponse(response) {
    setWeatherData({
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      currentTime: new Date(response.data.dt * 1000),
      loaded: true
    })
  }

  if (weatherData.loaded) {
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
          <div className="row" id="current-time">
            <FormattedTime data={weatherData.currentTime} />
          </div>
          <div className="row">
            <h1 className="city" id="city">
              {city}
            </h1>
          </div>
          <div className="row">
            <p className="today-date-time">
              {" "}
              <br />
              <FormattedDate data={weatherData.currentTime} />
            </p>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="current-icon"
              />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <h5 className="today-temp" id="today-temp">
                    {Math.round(weatherData.temp)}
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
              <span className="text-capitalize" id="weather-condition">{weatherData.description}</span> <br />
              Feels like: <span id="feels-like">{Math.round(weatherData.feelsLike)}º</span>
              <br />
              Humidity: <span id="humidity">{Math.round(weatherData.humidity)}%</span> <br />
              Wind speed: <span id="wind-speed">{Math.round(weatherData.wind)} km/h </span>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    
    axios.get(apiUrl).then(handleResponse);

    return ("Loading...");
  }
}