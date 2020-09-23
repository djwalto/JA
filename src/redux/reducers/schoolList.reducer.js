const schoolList = (state = [], action) => {
  switch (action.type) {
    case 'SET_SCHOOL_LIST':
      return action.payload;
    default:
      return state;
  }
};

export default schoolList;
