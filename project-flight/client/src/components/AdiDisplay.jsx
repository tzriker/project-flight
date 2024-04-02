import React from 'react';

const CircleProgressBar = ({ AdiValue }) => {
  // Calculate the percentage to determine the height of the inner circle
  

  // Define inline styles for the inner circle
  const circleStyle = {
    height: `${100-AdiValue}%`,
    backgroundColor: 'green', // You can adjust the color here
    transition: 'height 0.5s ease', // Optional: adds smooth animation
  };

  return (
    <>
    <div className="flex flex-col justify-end bg-blue-500 w-72 h-72 overflow-hidden rounded-full border-black border-solid border-2">
      <div className="bg-blue-500" style={circleStyle}></div>
    </div>
    </>
  );
};

export default CircleProgressBar;
