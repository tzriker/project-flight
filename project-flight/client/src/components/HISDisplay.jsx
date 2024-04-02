import React from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";

const HISDisplay = ({ hisValue }) => {

  
  return (
    <div>
      <div
        className='relative w-72 h-72 border border-black rounded-full' style={{transform: `rotate(${360 - hisValue}deg)` }}>
        <div style={{ transform: `rotate(${hisValue - 360}deg)` }} className='absolute right-1/2 top-0'>0</div>
        <div style={{ transform: `rotate(${hisValue - 360}deg)` }} className='absolute left-64 top-1/2'>90</div>
        <div style={{ transform: `rotate(${hisValue - 360}deg)` }} className='absolute left-32 bottom-0'>180</div>
        <div style={{ transform: `rotate(${hisValue - 360}deg)` }} className='absolute right-64 top-1/2'>270</div>
        <div style={{ transform: `rotate(${hisValue - 360}deg)` }} className="absolute inset-0 flex items-center justify-center" >
          <AiOutlineArrowUp size={55} style={{
            color: 'orange',
          }} />
        </div>
      </div>
    </div>
  );
};

export default HISDisplay;
