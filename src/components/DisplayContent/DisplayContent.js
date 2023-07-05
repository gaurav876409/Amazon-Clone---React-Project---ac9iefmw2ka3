import React from 'react';
import LeftSide from './Left/LeftSide';
import RightSide from './Right/RightSide';

const DisplayContent = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <LeftSide />
      </div>
      <div>
        <RightSide />
      </div>
    </div>
  )
}

export default DisplayContent;