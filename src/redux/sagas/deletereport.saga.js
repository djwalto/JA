import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* deleteReport(action) {
  try {
    yield axios.delete(
      `/api/report-form/${action.payload.id}`,
      action.payload.id
    );
  } catch (error) {
    console.log('Delete report failed', error);
  }
}

function* deleteReportSaga() {
  yield takeLatest('DELETE_REPORT', deleteReport);
}

export default deleteReportSaga;
