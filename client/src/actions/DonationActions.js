import * as types from '../constants/ActionTypes';

export function getDonations(donation) {
  return { type: types.GET_DONATION, donation };
}

export function addDonation(donation) {
  return { type: types.ADD_DONATION, donation };
}

export function deleteDonation(id) {
  return { type: types.DELETE_DONATION, id };
}

export function editDonation(id, text) {
  return { type: types.EDIT_DONATION, id, donation };
}

export function completeDonation(id) {
  return { type: types.COMPLETE_DONATION, id };
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED };
}