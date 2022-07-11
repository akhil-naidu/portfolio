import React from 'react';
import { RoughNotation } from 'react-rough-notation';

const Home = () => {
  return (
    <div className='container'>
      <RoughNotation type='underline' show={true}>
        Hello World
      </RoughNotation>
    </div>
  );
};

export default Home;
