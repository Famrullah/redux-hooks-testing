const initalState = {
  people: null,
  isError: false,
  messages: '',
};

const peopleReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'WAITING_GET_PEOPLE':
      return {
        ...state,
        isError: false,
        messages: '',
      };
    case 'ERROR_GET_PEOPLE':
      return {
        ...state,
        isError: true,
        messages: 'Oops Something Went Wrong ......',
      };
    case 'GET_PEOPLE':
      return {
        ...state,
        people: payload,
        isError: false,
        messages: 'successfully get list',
      };
    default:
      return state;
  }
};

export default peopleReducer;
