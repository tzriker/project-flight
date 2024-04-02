import React, { useContext, useState } from 'react'
import Input from '../components/Input'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../context/GlobalFlightData'
import REGISTER_FLY_URL, { BASE_URL } from '../context/urls'

const Inputpage = () => {
  const [alt, setAlt] = useState(0)
  const [his, setHis] = useState(0)
  const [adi, setAdi] = useState(0)
  const [errors, setErrors] = useState()
  const { globalState, updateGlobalState } = useContext(GlobalStateContext)
  const nav = useNavigate()
  const handleInputChange = (value, setter) => {
    // Update the state in the parent component
    setter(value);
  }

  const handleSubmit = async () => {
    const data = { alt, his, adi };
    // send it to the display page
    updateGlobalState(data)
    try {
      await axios.post(BASE_URL+REGISTER_FLY_URL, globalState)
      nav("/display")
    } catch (error) {
      if (error.response && error.response.status==409) {
        setErrors("network problem")
      }
    }
  }


  return (
    <div className='flex justify-center py-16 bg-gray-400'>
      <div className="flex flex-col bg-gray-500 w-72">
        <div className="flex flex-col space-y-4 items-center">
          <Input text="ALT" max={3000} value={alt} onInputChange={(value) => handleInputChange(value, setAlt)} />
          <Input text="HIS" max={360} value={his} onInputChange={(value) => handleInputChange(value, setHis)} />
          <Input text="ADI" max={100} value={adi} onInputChange={(value) => handleInputChange(value, setAdi)} />
        </div>
        <button onClick={handleSubmit} className="self-end mt-4 bg-gray-700 text-white rounded px-2 mr-2">send</button>
        {errors && <h4>{errors}</h4>}
      </div>
    </div>

  )
}

export default Inputpage
