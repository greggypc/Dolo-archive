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
    <Container>
      <Row>
        <Col size="3">
          <UserProfile />
        </Col>
        <Col size="6">
          <UserDonations />
        </Col>
        <Col size="3">
          <UserDonationForm />
        </Col>
      </Row>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
      varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
      Etiam ut feugiat ex. Cras non risus mi. 
    </p>
    </Container>
  </div>
);

export default Donations;

