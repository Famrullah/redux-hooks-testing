import axios from 'axios';

export const peopleAction = () => async (dispatch) => {
  try {
    dispatch({
      type: 'WAITING_GET_PEOPLE',
    });
    const response = await axios.get(`https://swapi.dev/api/people/`);
    await dispatch({
      type: 'GET_PEOPLE',
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: 'ERROR_GET_PEOPLE',
    });
  }
};
