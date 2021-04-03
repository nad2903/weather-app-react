import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherData from "./WeatherData";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({loaded: false});
  const [city, setCity] = useState(props.defaultCity);
  

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
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

  function search() {
    const apiKey = "b3a63df8beace64c182e708181f083a8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function textUpdate(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="container">
        <div className="weather">
          <form id="search-engine" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search a city..."
                    aria-describedby="basic-addon2"
                    id="search-city-input"
                    autoComplete="off"
                    autoFocus="on"
                    onChange={textUpdate}
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
          <WeatherData data={weatherData} />
        </div>
      </div>
    );
  } else {
    
    search();
    return ("Loading...");
  }
}