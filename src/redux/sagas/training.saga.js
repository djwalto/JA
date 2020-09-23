import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchLearningMaterials() {
  try {
    const response = yield axios.get('/api/training');
    yield put({ type: 'SET_TRAINING', payload: response.data });
  } catch (error) {
    console.log('Training get request failed', error);
  }
}

function* trainingSaga() {
  yield takeLatest('FETCH_LEARNING_MATERIALS', fetchLearningMaterials);
}

export default trainingSaga;
