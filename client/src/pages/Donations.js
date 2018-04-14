import React from "react"; 
import Container from "../components/grid/Container";
import Row from "../components/grid/Row";
import Col from "../components/grid/Col";
import UserProfile from "../components/UserProfile";
import UserDonations from "../components/userDonations/UserDonations";
import UserDonationForm from "../components/userDonations/UserDonationForm";


const containerStyle = {
  paddingTop:35
};

const Donations = () => (
  
    <div style={containerStyle} className="container">
      <div class="columns">
      <div class="column is-one-quarter">
        <UserProfile />
       </div>
       <div class="column is-one-half">
          <UserDonations />
       </div>
       <div class="column is-one-quarter">
          <UserDonationForm />
        </div>
      </div>
    </div>

);

export default Donations;

