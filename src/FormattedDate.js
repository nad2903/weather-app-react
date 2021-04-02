import React from "react";

export default function FormattedDate(props) {
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return (
        <div className="FormattedDate">
            {days[props.data.getDay()]} {months[props.data.getMonth()]} {props.data.getDate()}
        </div>
    );
}