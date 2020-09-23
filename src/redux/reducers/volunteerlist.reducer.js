const volunteerList = (state = [], action) => {
  switch (action.type) {
    case 'SET_VOLUNTEERS':
      return action.payload;
    case 'UNSET_VOLUNTEERS':
      return [];
    default:
      return state;
  }
};

export default volunteerList;
