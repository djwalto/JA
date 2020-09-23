import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* saveImageUrl(action) {
  try {
    console.log('Here is the patload in the saga. ', action.payload);
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.post(
      `/api/volunteer/saveImageUrl`,
      action.payload
    );
    // yield put({ type: 'GET_PROJECT_DETAILS', payload: action.payload.id });
  } catch (err) {
    console.log('ERROR Image Url post failed: ', err);
  }
}

function* saveImageUrlSaga() {
  yield takeLatest('POST_IMG_URL', saveImageUrl);
}

export default saveImageUrlSaga;
