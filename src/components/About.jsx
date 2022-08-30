import React from 'react';
import Akshat from '../assets/akshat.jpg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              
              <img className='rounded-md w-45 mx-auto h-45' src={Akshat} alt="akshat-img" />
              {/* <p>Hi. I'm Akshat, nice to meet you. Please take a look around.</p> */}
            </div>
            <div>
              <p>I am Currently a 3rd year Computer Science Student at the University of Windsor, my interests are football, MMA, solving puzzles, reading and programming.
              I aim to deepen my understanding in various areas of technology and product development. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;