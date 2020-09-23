import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addNewSchool(action) {
  //Needed data:
  // const name: string = req.body.name;
  // const address: string = req.body.address;
  // const city: string = req.body.city;
  // const state: string = req.body.state;
  // const zip: number = req.body.zip;
  try {
    const response = yield axios.get('/api/schools/add', action.payload);

    yield put({ type: 'GET_SCHOOL_LIST' });
  } catch (error) {
    console.log('Error message', error);
  }
}
function* addNewSchoolSaga() {
  yield takeLatest('ADD_NEW_SCHOOL', addNewSchool);
}
export default addNewSchoolSaga;
