const pendingInvites = (state = [], action) => {
  switch (action.type) {
    case 'SET_PENDING_INVITES':
      return action.payload;
    default:
      return state;
  }
};

export default pendingInvites;
