import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="row">
        <span id="current-time">Last updated at 12:36 PM</span>
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
          <span id="today-date">Monday February 15</span>
        </p>
      </div>
    </div>
  );
}