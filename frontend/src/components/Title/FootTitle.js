import React from "react";
import "./FootTitle.css";
import { Name_Logo } from "../Navitems/navitems";

function FootTitle() {
  return (
    <div className="footnavlogo">
    { Name_Logo.map((item, index) => {
      return (
        <h1 key={index} className="foot-logo-nav"><a className={Name_Logo} href={item.url}>{item.title}</a></h1>
      )
    })}
    </div>
  );
}

export default FootTitle;
