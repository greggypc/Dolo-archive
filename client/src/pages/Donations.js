import React from "react"; 
import Container from "../components/grid/Container";
import Row from "../components/grid/Row";
import Col from "../components/grid/Col";
import UserProfile from "../components/UserProfile";
import UserDonations from "../components/userDonations/UserDonations";
import UserDonationForm from "../components/userDonations/UserDonationForm";

const Donations = () => (
  <div>
    
    <h1>Donations</h1>
    <div class="container">
      <div class="columns">
          <UserProfile />
       
          <UserDonations />
       
          <UserDonationForm />
        
      </div>
    </div>
  </div>
);

export default Donations;

