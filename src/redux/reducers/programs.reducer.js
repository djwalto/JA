const programsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROGRAMS':
      return action.payload;
    case 'UNSET_PROGRAMS':
      return [];
    default:
      return state;
  }
};

export default programsReducer;
