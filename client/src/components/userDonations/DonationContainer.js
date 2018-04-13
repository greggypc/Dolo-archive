import React from "react";

const DonationCard = ({ fluid, children }) => (
  <div className="card blue lighten-1">
        <div className="card-content white-text">
          <span className="card-title">Your Donations</span>
          {children}
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
);

export default DonationCard;
