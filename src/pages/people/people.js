import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { peopleAction } from '../../store/actionCreators/peopleAction';

function People() {
  const dispatch = useDispatch();
  const { people } = useSelector((state) => state.peopleReducer);

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
      {people != null ? (
        <div>
          {people.results.map((item) => (
            <p>{item.name}</p>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default People;
