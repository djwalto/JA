const volunteerLearningMaterial = (state = [], action) => {
  switch (action.type) {
    case 'SET_LEARNING_MATERIAL':
      return action.payload;
    default:
      return state;
  }
};

export default volunteerLearningMaterial;
