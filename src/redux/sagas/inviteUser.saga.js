import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// payload must include an object with key name "email".
function* inviteUser(action) {
  try {
    const response = yield axios.post('/api/user', action.payload);
    yield put({ type: 'GET_PENDING_INVITES' });
  } catch (error) {
    console.log('Error message', error);
  }
}
function* inviteUserSaga() {
  yield takeLatest('INVITE_USER', inviteUser);
}
export default inviteUserSaga;
