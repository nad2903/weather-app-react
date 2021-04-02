import React from "react";

export default function FormattedTime(props) {
    return (
        <div className="FormattedTime">
            Last updated at {props.data.getHours()}:{props.data.getMinutes()}
        </div>
    );
}

