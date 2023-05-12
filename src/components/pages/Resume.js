import React from 'react';
// Resume page with list of skills and downloadable resume
export default function Resume() {
  return (
    <div className='container p-3'>
      <div className='row align-items-center p-3'>
        <h2 className='text-center col-12'>My List of Skills</h2>
        <ul className='list-unstyled text-center col-12 p-2'>
          <li>CSS</li>
          <li>HTML</li>
          <li>JS</li>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>React</li>
          <li>...and the list goes on ᕕ(⌐■_■)ᕗ ♪♬</li>
        </ul>
        <div className='col-12 text-center p-3'>
          <a className='btn btn-outline-dark' role='button' href='https://drive.google.com/uc?export=download&id=1Q4hfA5Bt9P3PqgO3gcsobujMGcAo5G06' download={'KKochoResume.pdf'}>Download my Resume Here</a>
        </div>
      </div>
    </div>
  );
}
