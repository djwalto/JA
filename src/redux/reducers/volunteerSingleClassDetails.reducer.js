const volunteerSingleClassDetails = (state = [], action) => {
  switch (action.type) {
    case 'SET_SINGLE_CLASS_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

export default volunteerSingleClassDetails;
