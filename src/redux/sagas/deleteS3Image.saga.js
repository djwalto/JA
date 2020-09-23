import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteS3Image(action) {
  try {
    console.log('request to delete sent to saga. ', action.payload.key);
    yield axios.delete(`/s3delete/${action.payload.key}`);
  } catch (err) {
    console.log('Error deleting image from AWS S3. ', err);
  }
}

function* deleteS3ImageSaga() {
  yield takeLatest('DELETE_S3_IMAGE', deleteS3Image);
}

export default deleteS3ImageSaga;
