import React from 'react';
import image from '../images/2022-12-18.png';

// Just the home page
export default function Home() {
  return (
    <div className='container vh-100'>
      <div className='row align-items-center'>
        <img src={image} className='col-md-3 rounded' alt='in-game self-portrait' />
        <div className='col-md-8'>
          <h1 className='text-center'>twqueen</h1>
          <p className='text-center p-2'>
            This is a mock up of a potential portfolio that will be used for presentation to future employers. Please note that this page is a work in progress. All information will be updated as time goes by.
            The profile image is my actual character in a MMORPG Final Fantasy XIV. Her name is Kanae Kocho. ( ◡‿◡ *)
            My developer name is twqueen; it is short for Taiwanese Queen. I am still learning and trying many new things to this webpage. 
            If you have any tips, suggestions, questions, or concerns, please contact me through github or in-game (maybe).
          </p>
          <p className='text-center'>Cheers~ (✿´ ‿`)🍨🍨(╹ワ╹✿)</p>
        </div>
      </div>
    </div>
  );
}
