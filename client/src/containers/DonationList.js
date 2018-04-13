import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as DonationActions from '../actions/DonationActions';
import { bindActionCreators } from 'redux';


class TodoList extends Component {

  render() {
    return (
      <div>
        <h1>Donations List</h1>
        <ul>
            {this.props.donations.map(donation => <li key={donation.id}>{donation.text}</li>)}
        </ul>
      </div>

    )
  }
}
function mapStateToProps (state) {
  return {
    donations: state.donations
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DonationActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps) (DonationList);