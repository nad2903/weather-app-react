import React from "react";
import Search from "./Search";
import Header from "./Header";

import "./Container.css";

export default function Container() {
  return (
    <div className="container">
      <Search />
      <Header />
    </div>
  );
}