import React, { useContext } from 'react'
import { GlobalStateContext } from '../context/GlobalFlightData'

const TextDisplay = () => {
    const {globalState} = useContext(GlobalStateContext)
    
  return (
    <>
    <div className='flex justify-center'>
      <div className='flex flex-wrap w-[90%] justify-center'>
        {Object.keys(globalState).map(key => (
          <div key={key} className='bg-gray-300 flex justify-center items-center border border-black w-52 h-40  text-3xl'>
           {key.toUpperCase()}:
            {globalState[key]}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default TextDisplay