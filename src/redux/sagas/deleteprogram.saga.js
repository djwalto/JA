import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* deleteProgram(action) {
  try {
    yield axios.delete(`/api/program/${action.payload.id}`, action.payload.id);
  } catch (error) {
    console.log('Delete program failed', error);
  }
}

function* deleteProgramSaga() {
  yield takeLatest('DELETE_PROGRAM', deleteProgram);
}

export default deleteProgramSaga;
