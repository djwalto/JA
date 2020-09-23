const trainingReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TRAINING':
      return action.payload;
    case 'UNSET_TRAINING':
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default trainingReducer;
