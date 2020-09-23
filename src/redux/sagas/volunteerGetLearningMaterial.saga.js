import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Needed data on payload
// {program_id: 'number'}

function* getLearningMaterial(action) {
  try {
    const response = yield axios.get(
      `/api/volunteer/resources/${action.payload.program_id}`
    );
    yield put({ type: 'SET_LEARNING_MATERIAL', payload: response.data });
  } catch (error) {
    console.log('Scheduled Classes Get request failed', error);
  }
}
function* volunteerGetLearningMaterialSaga() {
  yield takeLatest('GET_LEARNING_MATERIAL', getLearningMaterial);
}
export default volunteerGetLearningMaterialSaga;
