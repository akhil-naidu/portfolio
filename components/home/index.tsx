import React from 'react';
import { RoughNotation } from 'react-rough-notation';

const Home = () => {
  return (
    <div className='container'>
      <div className='mt-8'></div>
      <div className='flex  gap-8 justify-end'>
        <div>
          <RoughNotation type='box' show={true}>
            Home
          </RoughNotation>
        </div>

        <div>
          <RoughNotation type='box' show={true}>
            About
          </RoughNotation>
        </div>

        <div>
          <RoughNotation type='box' show={true}>
            Resume
          </RoughNotation>
        </div>

        <div>
          <RoughNotation type='box' show={true}>
            Projects
          </RoughNotation>
        </div>

        <div>
          <RoughNotation type='box' show={true}>
            Blogs
          </RoughNotation>
        </div>

        <div>
          <RoughNotation type='box' show={true}>
            Contact
          </RoughNotation>
        </div>
      </div>
    </div>
  );
};

export default Home;
