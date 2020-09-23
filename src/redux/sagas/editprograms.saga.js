import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PROGRAMS" actions
function* editProgram(action) {
  try {
    yield axios.put(`/api/program/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_PROGRAMS', payload: action.payload.id });
  } catch (error) {
    console.log('Program get request failed', error);
  }
}

function* editProgramSaga() {
  yield takeLatest('UPDATE_PROGRAM', editProgram);
}

export default editProgramSaga;
