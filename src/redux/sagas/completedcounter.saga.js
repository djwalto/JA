import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchCompleted() {
  try {
    const response = yield axios.get('/api/counters/completed');
    yield put({ type: 'SET_COMPLETED', payload: response.data });
  } catch (error) {
    console.log('Completed Counter get request failed', error);
  }
}

function* completedSaga() {
  yield takeLatest('FETCH_COMPLETED', fetchCompleted);
}

export default completedSaga;
