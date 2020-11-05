import React from "react";
import "./MainTitle.css";
import { Name_Logo } from "../Navitems/navitems";

function MainTitle() {
  return (
    <div className="headnavlogo">
    { Name_Logo.map((item, index) => {
      return (
        <h1 key={index} className="head-logo-nav"><a className={Name_Logo} href={item.url}>{item.title}</a></h1>
      )
    })}
    </div>
  );
}

export default MainTitle;
