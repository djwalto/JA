import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* editLearningMaterial(action) {
  try {
    yield axios.put(`/api/training/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_LEARNING_MATERIAL', payload: action.payload.id });
  } catch (error) {
    console.log('Learning material get request failed', error);
  }
}

function* editLearningMaterialSaga() {
  yield takeLatest('UPDATE_LEARNING_MATERIAL', editLearningMaterial);
}

export default editLearningMaterialSaga;
