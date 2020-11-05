import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import FootTitle from "../Title/FootTitle";
import {
  NavItemsResp,
  FootLogin,
  FootStore,
  Social_Facebook,
  Social_Instagram,
  Social_Youtube,
  Social_Twitter,
  links,
} from "../Navitems/navitems";
import "./foot.css";
import Search from "../Search/Search";

function Foot() {
  return (
    <foot className="nav-foot">
      <div className="foot-container">
        <div className="foot-row frow1">
          <h2>Social Media</h2>
          <ul className="social-media">
            {Social_Facebook.map((item, index) => {
              return (
                <li key={index} className="social1">
                  <a
                    className={Social_Facebook}
                    href={item.url}
                    target="_blank"
                  >
                    <li className="social">
                      <FaFacebookSquare size="2em" />
                      <p>{item.title}</p>
                    </li>
                  </a>
                </li>
              );
            })}
            {Social_Instagram.map((item, index) => {
              return (
                <li key={index} className="social1">
                  <a
                    className={Social_Instagram}
                    href={item.url}
                    target="_blank"
                  >
                    <li className="social">
                      <FaInstagram size="2em" />
                      <p>{item.title}</p>
                    </li>
                  </a>
                </li>
              );
            })}
            {Social_Youtube.map((item, index) => {
              return (
                <li key={index} className="social1">
                  <a className={Social_Youtube} href={item.url} target="_blank">
                    <li className="social">
                      <FaYoutube size="2em" />
                      <p>{item.title}</p>
                    </li>
                  </a>
                </li>
              );
            })}
            {Social_Twitter.map((item, index) => {
              return (
                <li key={index} className="social1">
                  <a className={Social_Twitter} href={item.url} target="_blank">
                    <li className="social">
                      <FaTwitter size="2em" />
                      <p>{item.title}</p>
                    </li>
                  </a>
                </li>
              );
            })}
            <li classname="logofoot">
              <FootTitle />
            </li>
          </ul>
        </div>
        <div className="foot-row frow2">
          <ul className="row2menu">
            <h2>Menu</h2>
            <div className="menu-title-list">
              {NavItemsResp.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={NavItemsResp} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
              {FootLogin.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={FootLogin} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
              {FootStore.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={FootStore} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
        <div className="foot-row frow3">
          <h2>Links</h2>
          <ul class="link-list">
          <Search />  
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <a className={links} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <p>©2020 Marcos Canela by EstudioMas</p>
    </foot>
  );
}

export default Foot;
