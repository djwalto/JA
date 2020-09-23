const volunteerScheduledClasses = (state = [], action) => {
  switch (action.type) {
    case 'SET_SCHEDULED_CLASSES':
      return action.payload;
    default:
      return state;
  }
};

export default volunteerScheduledClasses;
