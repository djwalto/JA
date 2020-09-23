const adminList = (state = [], action) => {
  switch (action.type) {
    case 'SET_ADMIN':
      return action.payload;
    case 'UNSET_ADMIN':
      return [];
    default:
      return state;
  }
};

export default adminList;
