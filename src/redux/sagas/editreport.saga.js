import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* editReport(action) {
  try {
    yield axios.put(`/api/report-form/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_REPORT', payload: action.payload.id });
  } catch (error) {
    console.log('Report get request failed', error);
  }
}

function* editReportSaga() {
  yield takeLatest('UPDATE_REPORT', editReport);
}

export default editReportSaga;
