import React from "react";

const Hero = ({ children }) => (
  <div style={{ height: 300, clear: "both" }} className="jumbotron">
    {children}
  </div>
);

export default Hero;
