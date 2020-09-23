import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* adminAssignClassToVolunteer(action) {
  try {
    yield axios.post('/api/volunteer/newScheduledClass', action.payload);
    yield put({ type: 'GET_SCHEDULED_CLASSES' });
    yield put({ type: 'FETCH_VOLUNTEERS' });
  } catch (error) {
    console.log('Error message: ', error);
  }
}
function* adminAssignClassToVolunteerSaga() {
  yield takeLatest('ASSIGN_VOLUNTEER_CLASS', adminAssignClassToVolunteer);
}
export default adminAssignClassToVolunteerSaga;
