import React from "react";

const UserProfile = ({ children }) => (
  <div className="card blue darken-1">
        <div className="card-content white-text">
          <span className="card-title">Your Profile</span>
          <span className="card-title">
            <span className="avatar">^^^avatar^^^</span>
            <p>Welcome DonorName!</p>
          </span>

        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
);

export default UserProfile;
