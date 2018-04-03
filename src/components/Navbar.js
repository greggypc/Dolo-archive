import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
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
);

export default Navbar;