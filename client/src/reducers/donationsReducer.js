import { GET_DONATIONS, ADD_DONATION, DELETE_DONATION, EDIT_DONATION, COMPLETE_DONATION, CLEAR_COMPLETED } from '../constants/ActionTypes';

const initialState = [{
  donation: 'Add a donation!',
  completed: false,
  id: 0,
  uid: 3
}];

function donations(state = initialState, action) {
  switch (action.type) {
  case GET_DONATIONS:
    return [{
      id: state.reduce((maxId, donation) => Math.max(donation.id, maxId), -1) + 1,
      completed: false,
      text: action.text
    }, ...state];

  case ADD_DONATION:
    return [{
      id: state.reduce((maxId, donation) => Math.max(donation.id, maxId), -1) + 1,
      completed: false,
      text: action.text
    }, ...state];

  case DELETE_DONATION:
    return state.filter(donation =>
      donation.id !== action.id
    );

  case EDIT_DONATION:
    return state.map(donation =>
      donation.id === action.id ?
        Object.assign({}, donation, { text: action.text }) :
        donation
    );

  case COMPLETE_DONATION:
    return state.map(donation =>
      donation.id === action.id ?
        Object.assign({}, donation, { completed: !donation.completed }) :
        donation
    );

  case CLEAR_COMPLETED:
    return state.filter(donation => donation.completed === false);

  default:
    return state;
  }
}

export default donations;