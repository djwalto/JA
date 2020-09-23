import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import volunteerList from './volunteerList.saga';
import deleteVolunteer from './deletevolunteer.saga';
import editVolunteer from './editvolunteer.saga';
import getReportSaga from './getreport.saga';
import reportFormSaga from './report-form.saga';
import deleteReportSaga from './deletereport.saga';
import editReportSaga from './editreport.saga';
import programsSaga from './programs.saga';
import editProgramSaga from './editprograms.saga';
import deleteProgramSaga from './deleteprogram.saga';

import volunteerGetClassListSaga from './volunteerGetClassList.saga';
import volunteerCompleteClassSaga from './volunteerCompleteClass.saga';
import volunteerGetLearningMaterialSaga from './volunteerGetLearningMaterial.saga';
import volunteerGetClassDetailsSaga from './volunteerGetSingleClassDetails.saga';
import completedCounterSaga from './completedcounter.saga';
import inProgressSaga from './inprogresscounter.saga';
import studentCounterSaga from './studentscounter.saga';
import volunteerCounterSaga from './volunteercounter.saga';
import deleteS3ImageSaga from './deleteS3Image.saga';
import trainingSaga from './training.saga';
import adminAssignClassToVolunteerSaga from './adminAssignClassToVolunteer.saga';
import addNewSchoolSaga from './addNewSchool.saga';
import getSchoolListSaga from './getSchoolList.saga';
import getPendingInvitesSaga from './getPendingInvites.saga';
import inviteUserSaga from './inviteUser.saga';
import adminListSaga from './getadminusers.saga';
import saveImageUrlSaga from './saveImageToDatabase.saga';
import postClassSaga from './postClass.saga';
import postTrainingSaga from './postTraining.saga';

import getImagesSaga from './getImages.saga';
import deleteImageSaga from './deleteImage.saga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    volunteerList(), //contains only users that are volunteers
    deleteVolunteer(),
    editVolunteer(),
    getReportSaga(),
    reportFormSaga(),
    deleteReportSaga(),
    deleteS3ImageSaga(),
    editReportSaga(),
    programsSaga(),
    editProgramSaga(),
    deleteProgramSaga(),
    volunteerGetClassListSaga(),
    volunteerCompleteClassSaga(),
    volunteerGetLearningMaterialSaga(),
    volunteerGetClassDetailsSaga(),
    completedCounterSaga(),
    inProgressSaga(),
    studentCounterSaga(),
    volunteerCounterSaga(),
    trainingSaga(),
    adminAssignClassToVolunteerSaga(),
    addNewSchoolSaga(),
    getSchoolListSaga(),
    getPendingInvitesSaga(),
    inviteUserSaga(),
    adminListSaga(),
    trainingSaga(),
    saveImageUrlSaga(),
    postClassSaga(),
    postTrainingSaga(),
    getImagesSaga(),
    deleteImageSaga(),
  ]);
}
