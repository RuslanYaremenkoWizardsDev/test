import React from 'react';
import './index.css';
import UploaderContent from './UploaderContent';

const Uploader = () => (
  <div className='uploader'>
    <UploaderContent />
    <div className='description'>
        <span className='description__title'>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
        </span>
        <span className='description__text'>
            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney.
        </span>
    </div>
  </div>
);

export default Uploader