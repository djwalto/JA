import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// No action.payload needed. The router will get required data from req.user

function* getScheduledClasses(action) {
  try {
    const response = yield axios.get('/api/volunteer/classes');

    yield put({ type: 'SET_SCHEDULED_CLASSES', payload: response.data });
  } catch (error) {
    console.log('Scheduled Classes Get request failed', error);
  }
}

function* volunteerGetClassListSaga() {
  yield takeLatest('GET_SCHEDULED_CLASSES', getScheduledClasses);
}

export default volunteerGetClassListSaga;
