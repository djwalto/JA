import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* deleteLearningMaterial(action) {
  try {
    yield axios.delete(`/api/training/${action.payload.id}`, action.payload.id);
  } catch (error) {
    console.log('Delete learning material failed', error);
  }
}

function* deleteLearningMaterialSaga() {
  yield takeLatest('DELETE_LEARNING_MATERIAL', deleteLearningMaterial);
}

export default deleteLearningMaterialSaga;
