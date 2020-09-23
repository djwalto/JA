import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Required data on payload
// {scheduled_class_id: 'number'}

function* getClassDetails(action) {
  try {
    const response = yield axios.get(
      `/api/volunteer/scheduled/${action.payload.scheduled_class_id}`
    );
    yield put({ type: 'SET_SINGLE_CLASS_DETAILS', payload: response.data });
  } catch (error) {
    console.log('Single Scheduled Class Details Get request failed', error);
  }
}
function* volunteerGetClassDetailsSaga() {
  yield takeLatest('GET_CLASS_DETAILS', getClassDetails);
}
export default volunteerGetClassDetailsSaga;
