import React from "react";
import { Link } from "react-router-dom";


document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});



const Nav = () => (

<nav className="navbar is-transparent">
  <div className="navbar-brand">
    <Link className="navbar-item" to="/">
      <img src="../../images/dolo.png" alt="Dolo" />
    </Link>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <Link className={window.location.pathname === "/" ? "active navbar-item" : "navbar-item"} 
        to="/">
        Home
      </Link>
      <div className="navbar-item has-dropdown is-hoverable">
        <li className="navbar-link">
          Donor Links
        </li>
        <div className="navbar-dropdown is-boxed">
          <Link className={window.location.pathname === "/donations" ? "active navbar-item" : "navbar-item"}
           to="/donations">
            Donations
          </Link>
          <Link className={window.location.pathname === "/search-needs" ? "active navbar-item" : "navbar-item"}
           to="/search-needs">
            Search Org Needs
          </Link>
        </div>
      </div>

       <div className="navbar-item has-dropdown is-hoverable">
        <li className="navbar-link">
          Org Links
        </li>
        <div className="navbar-dropdown is-boxed">
          <Link className={window.location.pathname === "/needs" ? "active navbar-item" : "navbar-item"}
           to="/needs">
            Needs
          </Link>
          <Link className={window.location.pathname === "/search-donations" ? "active navbar-item" : "navbar-item"}
           to="/search-donations">
            Search Donations
          </Link>
        </div>
      </div>

      <Link className={window.location.pathname === "/about" ? "active navbar-item" : "navbar-item"}
        to="/about">
        About Dolo
      </Link>

      <Link className={window.location.pathname === "/contact" ? "active navbar-item" : "navbar-item"}
        to="contact">
        Contact
      </Link>
    </div>
   
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </p>
          <p className="control">
            <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.6.2/bulma-0.6.2.zip">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div>
 
</nav>

);

export default Nav;


