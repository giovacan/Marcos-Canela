import React, { Component } from 'react';
import {NavItemsResp, NavItemsLogin, NavItemsStore} from '../Navitems/navitems';
import MainTitle from '../Title/MainTitle';
import './Navbar.css';

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
  }

  
  render()  {
    return (
      <header class="container">
      <MainTitle />
      <nav class="menu-resp">
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
        { NavItemsResp.map((item, index) => {
          return (
            <li key={index}><a className={NavItemsResp} href={item.url}>{item.title}</a></li>
          )
        })}
        </ul>
        <div class="menu-def"></div>
        <ul class="search">
          <li><a href="#top"><i class="fa fa-search fa-lg" aria-hidden="true"></i></a></li>
        </ul>  
        <ul class="acc-btn">
        { NavItemsLogin.map((item, index) => {
          return (
            <li key={index}><a className={NavItemsLogin} class="cartlg" href={item.url}>{item.title}<i className={item.icon}></i></a></li>
          )
        })}
        { NavItemsLogin.map((item, index) => {
          return (
            <li key={index}><a className={NavItemsLogin} class="cartx2" href={item.url}><i className={item.icon}></i></a></li>
          )
        })}
        </ul>
        <ul class="shop-car">
        { NavItemsStore.map((item, index) => {
          return (
            <li key={index}><a className={NavItemsStore} class="cartlg" href={item.url}>{item.title}<i className={item.icon}></i></a></li>
          )
        })}
        { NavItemsStore.map((item, index) => {
          return (
            <li key={index}><a className={NavItemsStore} class="cartx2" href={item.url}><i className={item.icon}></i></a></li>
          )
        })}
        </ul>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div> 
      </nav>
    </header>   
    )
  } 
}


export default Navbar;