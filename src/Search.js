import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <form id="search-engine">
      <div className="row">
        <div className="col-9">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search another city..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              id="search-city-input"
              autocomplete="off"
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
  );
}