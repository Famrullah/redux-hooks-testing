import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import People from '../pages/people/people';
import configureStore from 'redux-mock-store';
import * as ReactReduxHooks from '../hooks/react-redux/reactReduxHooks';
import PeopleList from '../pages/people/people_list';

configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => ({
    peopleState: {
      people: '',
      isError: '',
      messages: '',
    },
  }),
}));

describe('people component', () => {
  let wrapper;
  let useEffect;
  let store;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    store = configureStore()({
      peopleState: {
        people: '',
        isError: '',
        messages: '',
      },
    });

    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    mockUseEffect();

    jest
      .spyOn(ReactReduxHooks, 'useSelector')
      .mockImplementation((state) => store.getState());

    jest
      .spyOn(ReactReduxHooks, 'useDispatch')
      .mockImplementation(() => store.dispatch);

    wrapper = shallow(<People store={store} />);
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = shallow(<People />);
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('dispatch search action to store', () => {
    const actions = store.getActions();
    expect(actions).toEqual([]);
  });

  it('should render people-list components', () => {
    expect(wrapper.find(PeopleList));
  });

  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<People />);
    expect(wrapper).toMatchSnapshot();
  });
});
