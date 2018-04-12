import React from "react";
import '../../css/style.css'


const Hero = ({ children }) => (
  <div>
  <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <br /><br />
        <h1 className="header center teal-text text-lighten-2">We Make Donating Simple</h1>
        <div className="row center">
          <h5 className="header col s12 light">Welcome to Donation Location. 
            We inspire the people to make a difference in their community 
            by connecting them with local organizations on one easy-to-use platform 
            where they can donate items to charities in their neighborhood.
        </h5>
        </div>
        <div className="row center">
          <a href="#" 
             id="download-button" 
             className="btn-large waves-effect waves-light teal lighten-1">Get Started
          </a>
        </div>
        <br /><br />
      
      </div>
    </div>
  <div className="parallax"><img src="../../public/images/dolo04.jpg" alt="Unsplashed background img 1" /></div>
  </div>
    {children}
  </div>
);

export default Hero;
