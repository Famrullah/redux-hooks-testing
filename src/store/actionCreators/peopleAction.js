import axios from 'axios';

export const peopleAction = () => async (dispatch) => {
  try {
    dispatch({
      type: 'WAITING_GET_PEOPLE',
    });
    const response = await axios.get(`https://swapi.dev/api/people/`);
    const data = await response.data;
    await dispatch({
      type: 'GET_PEOPLE',
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: 'ERROR_GET_PEOPLE',
    });
  }
};
