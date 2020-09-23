import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* deleteVolunteer(action) {
  try {
    yield axios.delete(`/api/user/${action.payload.id}`, action.payload.id);
  } catch (error) {
    console.log('Delete volunteer failed', error);
  }
}

function* deleteVolunteerSaga() {
  yield takeLatest('DELETE_VOLUNTEER', deleteVolunteer);
}

export default deleteVolunteerSaga;
