import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getPendingInvites(action) {
  try {
    const response = yield axios.get('/api/user/pending');
    yield put({ type: 'SET_PENDING_INVITES', payload: response.data });
  } catch (error) {
    console.log('Error message', error);
  }
}
function* getPendingInvitesSaga() {
  yield takeLatest('GET_PENDING_INVITES', getPendingInvites);
}
export default getPendingInvitesSaga;
