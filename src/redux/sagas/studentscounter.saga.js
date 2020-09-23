import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchStudents() {
  try {
    const response = yield axios.get('/api/counters/students');
    yield put({ type: 'SET_STUDENTS', payload: response.data });
  } catch (error) {
    console.log('Students Counter get request failed', error);
  }
}

function* studentsSaga() {
  yield takeLatest('FETCH_STUDENTS', fetchStudents);
}

export default studentsSaga;
