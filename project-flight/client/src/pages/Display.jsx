import React, { useState } from 'react'
import TextDisplay from '../components/TextDisplay'
import VisualDisplay from '../components/VisualDisplay'
import { useNavigate } from 'react-router-dom'

const Display = () => {
const [isTextMode, setIsTextMode]= useState()
const nav = useNavigate()
  return (
    
    <>
      <div className='flex justify-evenly py-8'>
        <button className='border border-black w-24 bg-gray-200' onClick={()=>setIsTextMode(true)} >text</button>
        <button className= 'border border-black w-24 bg-gray-200' onClick={()=>setIsTextMode(false)} >visual</button>
        <button className='border border-black w-8 bg-gray-200' onClick={()=>nav("..")}> +</button>
      </div>
     {isTextMode ? <TextDisplay/> : <VisualDisplay/>}
    </>
  )
}

export default Display