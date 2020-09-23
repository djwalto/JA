import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchVolunteerCount() {
  try {
    const response = yield axios.get('/api/counters/numbervolunteers');
    yield put({ type: 'SET_VOLUNTEER_COUNT', payload: response.data });
  } catch (error) {
    console.log('Volunteers Counter get request failed', error);
  }
}

function* volunteerCountSaga() {
  yield takeLatest('FETCH_VOLUNTEER_COUNT', fetchVolunteerCount);
}

export default volunteerCountSaga;
