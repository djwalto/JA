import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchPrograms() {
  try {
    const response = yield axios.get('/api/programs');
    yield put({ type: 'SET_PROGRAMS', payload: response.data });
  } catch (error) {
    console.log('Programs get request failed', error);
  }
}

function* programsSaga() {
  yield takeLatest('FETCH_PROGRAMS', fetchPrograms);
}

export default programsSaga;
