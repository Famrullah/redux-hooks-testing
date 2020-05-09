import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { peopleAction } from '../../store/actionCreators/peopleAction';

const mockStore = configureMockStore([thunk]);

describe('people Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      peopleState: {
        people: [],
        isError: false,
        messages: '',
      },
    });
  });

  describe('get people action creator', () => {
    it('dispatches GET_PEOPLE action', async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: [{ id: 1, name: 'Faisal' }],
        })
      );

      await store.dispatch(peopleAction());
      const actions = await store.getActions();

      expect.assertions(3);
      expect(actions[0].type).toEqual('WAITING_GET_PEOPLE');
      expect(actions[1].type).toEqual('GET_PEOPLE');
      expect(actions[1].payload[0].name).toEqual('Faisal');
    });
  });
});
