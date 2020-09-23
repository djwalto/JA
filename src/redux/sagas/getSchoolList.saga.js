import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getSchoolList() {
  try {
    const response = yield axios.get('/api/schools/');
    yield put({ type: 'SET_SCHOOL_LIST', payload: response.data });
  } catch (error) {
    console.log('Error getting schools from database: ', error);
  }
}
function* getSchoolListSaga() {
  yield takeLatest('GET_SCHOOL_LIST', getSchoolList);
}
export default getSchoolListSaga;
