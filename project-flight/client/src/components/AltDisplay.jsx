import React from 'react'


const AltDisplay = ({AltValue}) => {

    const percentage = AltValue / 3000 * 100;
  return (
<div className="relative flex flex-col justify-end bg-gray-500 w-20 h-72 rounded-lg overflow-hidden">
    <div className="bg-blue-500" style={{ height: `${percentage}%` }}></div>
    <div className=" text-wrap bg-white text-black">{AltValue}/3000</div>
</div>
  )
}

export default AltDisplay