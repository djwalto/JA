const completedReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_COMPLETED':
      return action.payload;
    case 'UNSET_COMPLETED':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default completedReducer;
