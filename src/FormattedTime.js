import React from "react";

export default function FormattedTime(props) {
    if (props.data.getMinutes() < 10) {
        return (
            <div className="FormattedTime">
                Last updated at {props.data.getHours()}:0{props.data.getMinutes()}
            </div>
        );
    } else {
        return (
        <div className="FormattedTime">
            Last updated at {props.data.getHours()}:{props.data.getMinutes()}
        </div>
    );
    }
    
}

