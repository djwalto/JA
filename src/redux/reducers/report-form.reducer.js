const reportformReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_REPORT':
      return action.payload;
    case 'UNSET_REPORT':
      return [];
    default:
      return state;
  }
};

export default reportformReducer;
