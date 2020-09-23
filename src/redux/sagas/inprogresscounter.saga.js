import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchInProgress() {
  try {
    const response = yield axios.get('/api/counters/inprogress');
    yield put({ type: 'SET_IN_PROGRESS', payload: response.data });
  } catch (error) {
    console.log('In Progress Counter get request failed', error);
  }
}

function* inProgressSaga() {
  yield takeLatest('FETCH_IN_PROGRESS', fetchInProgress);
}

export default inProgressSaga;
