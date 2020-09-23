const studentCounterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STUDENTS':
      return action.payload;
    case 'UNSET_STUDENTS':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default studentCounterReducer;
