import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="row">
        <span id="current-time">Last updated at 05:52 PM</span>
      </div>
      <div className="row">
        <h1 className="city" id="city">
          Toronto
        </h1>
      </div>
      <div className="row">
        <p className="today-date-time">
          {" "}
          <br />
          <span id="today-date">Monday March 8</span>
        </p>
      </div>
    </div>
  );
}