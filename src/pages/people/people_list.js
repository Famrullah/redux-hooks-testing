import React from 'react';

const PeopleList = (props) => {
  console.log(props);
  return (
    <div>
      {props.list.results.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
