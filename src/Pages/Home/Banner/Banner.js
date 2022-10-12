import React from 'react';
import Lottie from 'lottie-react'
import reader from '../../../assets/reader.json'

const Banner = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2'>
      <div className='flex flex-col items-center justify-between lg:flex-row'>
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-2'>
            {/* <h1>That Quiz is a website featuring multiple-choice, matching, and short-answer tests on a variety of core subjects.</h1> */}
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              Programming is  <br className='hidden md:block' />the art of{' '}
              <span className='inline-block text-blue-400'>algorithm design</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              Programming isn't about what you know; it's about what you can figure out.
              The only way to learn a new programming language is by writing programs in it.
              Sometimes it's better to leave something alone, to pause, and that's very true of programming.

            </p>
          </div>
        </div>

        <div className='relative lg:w-1/2 '>
          <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
            <Lottie animationData={reader} loop={true} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;