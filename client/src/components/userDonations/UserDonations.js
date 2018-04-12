import React from 'react';
import DonationList from './DonationList';
import DonationListItem from './DonationListItem';

class UserDonations extends React.Component {
  
  render() {
    return (
      <div>
        <p>Thus users's donations</p>
        <DonationList>
          <DonationListItem>

          </DonationListItem>
        </DonationList>
      </div>
        
    );
  }
}

export default UserDonations;