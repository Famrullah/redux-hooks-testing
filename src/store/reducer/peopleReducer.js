const initalState = {
  people: null,
  loading: false,
};

const peopleReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'WAITING_GET_PEOPLE':
      return {
        ...state,
        loading: true,
      };
    case 'ERROR_GET_PEOPLE':
      return {
        ...state,
        loading: false,
      };
    case 'GET_PEOPLE':
      return {
        ...state,
        loading: false,
        people: payload,
      };
    default:
      return state;
  }
};

export default peopleReducer;
