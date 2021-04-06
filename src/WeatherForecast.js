import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);
    
    function handleResponse(response) {
      setForecastData(response.data.daily);
      setLoaded(true);
    }

    if (loaded) {
      return(
        <div className="WeatherForecast">
          <div className="row">
            {forecastData.map(function (dailyForecast, index) {
              if (index < 4) {
                return (
                  <div className="col-3 day" key={index}>
                    <Forecast data={dailyForecast} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      );
    } else {

      const apiKey = "b3a63df8beace64c182e708181f083a8";
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&units=metric&appid=${apiKey}`
      
      axios.get(apiUrl).then(handleResponse);
      return null;
    }
}