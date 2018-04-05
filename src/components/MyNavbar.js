import React from "react";
import { Link } from "react-router-dom";

const MyNavbar = () => (
  <nav class="navbar navbar-default">
  <div class="container-fluid">
 
    {/* <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div> */}

  <ul className="nav nav-tabs">
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
  </div>
</nav>
);

export default MyNavbar;