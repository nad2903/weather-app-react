import React from "react";

import "./Link.css";

export default function Link() {
  return (
    <div className="code-link">
      <a href="https://github.com/nad2903/weather-app-react" target="_blank" rel="noreferrer">
        Open-source code,
      </a> {"  "}
      by Nadia Scharnhorst
    </div>
  );
}