import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(props.loaded);
    let [forecastData, setForecastData] = useState(null);
    
    function handleResponse(response) {
      setForecastData(response.data.daily);
      setLoaded(true);
    }

    function search() {
      const apiKey = "b3a63df8beace64c182e708181f083a8";
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&units=metric&appid=${apiKey}`
      
      axios.get(apiUrl).then(handleResponse);
    }

    if (loaded) {
      return(
        <div className="WeatherForecast">
          <div className="row">
            <div className="col-3 day">
              <Forecast data={forecastData[1]} />
            </div>
            <div className="col-3 day">
              <Forecast data={forecastData[2]} />
            </div>
            <div className="col-3 day">
              <Forecast data={forecastData[3]} />
            </div>
            <div className="col-3 day">
              <Forecast data={forecastData[4]} />
            </div>
          </div>
        </div>
      );
    } else {
      
      search();
      return null;
    }
}