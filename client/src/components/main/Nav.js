import React from "react";
import { Link } from "react-router-dom";


const Nav = () => (


<nav className="blue">
    <div className="nav-wrapper left-align">
      <a id="logo-container" href="#" className="brand-logo"><img src="../../images/dolo.png" alt="DoLo" /></a>
      <ul className="right hide-on-med-and-down">
      <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/donations" ? "active" : ""}>
      <Link to="/donations">Donate</Link>
    </li>
    <li className={window.location.pathname === "/search-needs" ? "active" : ""}>
      <Link to="/search-needs">Search Needs</Link>
    </li>
    <li className={window.location.pathname === "/needs" ? "active" : ""}>
      <Link to="/needs">Needs</Link>
    </li>
    <li className={window.location.pathname === "/search-donations" ? "active" : ""}>
      <Link to="/search-donations">Search Donations</Link>
    </li>
    <li className={window.location.pathname === "/about" ? "active" : ""}>
      <Link to="/about">About</Link>
    </li>
      </ul>

      <ul id="nav-mobile" className="sidenav">
        <li><a href="#">Navbar Link</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    
    </div>
  </nav>

);

export default Nav;