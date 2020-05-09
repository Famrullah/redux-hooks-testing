import React, { useEffect, Suspense } from 'react';
import {
  useDispatch,
  useSelector,
} from '../../hooks/react-redux/reactReduxHooks';
import { peopleAction } from '../../store/actionCreators/peopleAction';
import Loading from '../../components/loading/loading';

const PeopleList = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./people_list')), 3000);
  });
});

function People() {
  const dispatch = useDispatch();
  const { people, isError, messages } = useSelector(
    (state) => state.peopleState
  );

  useEffect(() => {
    const fetchData = (people) => {
      dispatch(
        peopleAction({
          people: people,
        })
      );
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <PeopleList list={people} isError={isError} messages={messages} />
      </Suspense>
    </div>
  );
}

export default People;
