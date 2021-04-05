import React from "react";

export default function Forecast(props) {

    let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`

    function day() {
        let forecastDate = new Date(props.data.dt * 1000);
        let days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];

        return (days[forecastDate.getDay()]);
    }
    return (
        <div className="forecast">
            {day()}
            <br />
            <img
                src={iconUrl}
                alt={props.data.weather[0].description}
                className="forecast-icon"
              /> <br />
            <span className="forecast-max">
                {Math.round(props.data.temp.max)}º
            </span>  {"  "}
            <span>
                {Math.round(props.data.temp.min)}º
            </span>
        </div>
    );
}