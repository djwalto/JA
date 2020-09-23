import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getImages(action) {
  try {
    const response = yield axios.get('/api/s3/');
    yield put({ type: 'SET_IMAGES', payload: response.data });
  } catch (error) {
    console.log('Error message', error);
  }
}
function* getImagesSaga() {
  yield takeLatest('FETCH_IMAGES', getImages);
}
export default getImagesSaga;
