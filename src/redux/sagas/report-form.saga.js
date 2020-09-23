import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* submitReport(action) {
  try {
    // passes the username and password from the payload to the server
    yield axios.post('/api/report-form', action.payload);
  } catch (error) {
    console.log('Error with submitting Report:', error);
  }
}

function* reportformSaga() {
  yield takeLatest('SUBMIT_REPORT', submitReport);
}

export default reportformSaga;
