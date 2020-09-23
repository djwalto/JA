import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* submitClass(action) {
  try {
    // passes the username and password from the payload to the server
    yield axios.post('/api/programs', action.payload);
    yield put({ type: 'FETCH_PROGRAMS' });
  } catch (error) {
    console.log('Error with submitting Class:', error);
  }
}

function* postClassSaga() {
  yield takeLatest('SUBMIT_CLASS', submitClass);
}

export default postClassSaga;
