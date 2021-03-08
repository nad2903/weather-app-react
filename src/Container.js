import React from "react";
import Search from "./Search";
import Header from "./Header";
import Current from "./Current";
import Stats from "./Stats";

import "./Container.css";

export default function Container() {
  return (
    <div className="container">
      <Search />
      <Header />
      <Current />
      <Stats />
    </div>
  );
}