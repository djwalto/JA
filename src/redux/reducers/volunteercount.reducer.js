const volunteerCountReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_VOLUNTEER_COUNT':
      return action.payload;
    case 'UNSET_VOLUNTEER_COUNT':
      return {};
    default:
      return state;
  }
};

export default volunteerCountReducer;
