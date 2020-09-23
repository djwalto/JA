import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* submitTraining(action) {
  try {
    // passes the username and password from the payload to the server
    yield axios.post('/api/training', action.payload);
  } catch (error) {
    console.log('Error with submitting training:', error);
  }
}

function* postTrainingSaga() {
  yield takeLatest('SUBMIT_TRAINING', submitTraining);
}

export default postTrainingSaga;
