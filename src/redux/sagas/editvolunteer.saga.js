import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* editVolunteer(action) {
  try {
    yield axios.put(`/api/user/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_VOLUNTEER', payload: action.payload.id });
  } catch (error) {
    console.log('Dog get request failed', error);
  }
}

function* editVolunteerSaga() {
  yield takeLatest('UPDATE_VOLUNTEER', editVolunteer);
}

export default editVolunteerSaga;
