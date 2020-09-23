import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import reportformReducer from './report-form.reducer';
import trainingReducer from './training.reducer';
import volunteerScheduledClasses from './volunteerScheduledClasses.reducer';
import volunteerLearningMaterial from './volunteerLearningMaterial.reducer';
import volunteerSingleClassDetails from './volunteerSingleClassDetails.reducer';
import volunteerList from './volunteerlist.reducer';
import programsReducer from './programs.reducer';
import completedCounter from './completedcounter.reducer';
import progressCounter from './inprogresscounter.reducer';
import studentCounter from './studentcounter.reducer';
import volunteerCounter from './volunteercount.reducer';
import schoolList from './schoolList.reducer';
import pendingInvites from './pendingInvites.reducer';
import adminList from './getadminuser.reducer';
import imagesReducer from './images.reducer';

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  reportformReducer, //will have all scheduled_classes information
  trainingReducer, //will show all learning materials
  volunteerScheduledClasses,
  volunteerLearningMaterial,
  volunteerSingleClassDetails,
  volunteerList,
  programsReducer,
  completedCounter,
  progressCounter,
  studentCounter,
  volunteerCounter,
  schoolList,
  pendingInvites,
  adminList,
  imagesReducer,
});

export default rootReducer;
