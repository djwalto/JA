import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchReport() {
  try {
    const response = yield axios.get('/api/report-form');
    yield put({ type: 'SET_REPORT', payload: response.data });
  } catch (error) {
    console.log('Report get request failed', error);
  }
}

function* reportSaga() {
  yield takeLatest('FETCH_REPORT', fetchReport);
}

export default reportSaga;
