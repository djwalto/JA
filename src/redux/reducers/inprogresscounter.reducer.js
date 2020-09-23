const inProgressReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_IN_PROGRESS':
      return action.payload;
    case 'UNSET_IN_PROGRESS':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default inProgressReducer;
