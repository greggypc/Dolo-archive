import React from "react"; 
import axios from "axios";
import Container from "../components/grid/Container";
import Row from "../components/grid/Row";
import Col from "../components/grid/Col";
import UserProfile from "../components/UserProfile";
import UserDonations from "../components/userDonations/UserDonations";
import UserDonationForm from "../components/userDonations/UserDonationForm";


const containerStyle = {
  paddingTop:35
};

class Donations extends React.Component {

  componentDidMount() {
    axios.get('/api/donations')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }


  render() {
    return (
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
    )
  }
  
};
  

export default Donations;

