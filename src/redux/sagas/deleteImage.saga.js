import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteImage(action) {
  try {
    const response = yield axios.delete(`/api/s3/delete/${action.payload}`);
    yield put({ type: 'FETCH_IMAGES' });
  } catch (error) {
    console.log('Error deleting image! ', error);
  }
}
function* deleteImageSaga() {
  yield takeLatest('DELETE_IMAGE', deleteImage);
}
export default deleteImageSaga;
