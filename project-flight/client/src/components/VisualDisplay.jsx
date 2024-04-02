import React, { useContext } from 'react'
import { GlobalStateContext } from '../context/GlobalFlightData'
import AltDisplay from './AltDisplay'
import AdiDisplay from './AdiDisplay'
import HISDisplay from './HISDisplay'

 const VisualDisplay = () => {
    const { globalState } = useContext(GlobalStateContext)
    return (
        <div className='flex flex-col sm:flex-row justify-evenly'>
            <AltDisplay AltValue={globalState['alt']}/>
            <HISDisplay hisValue={globalState['his']}/>
            <AdiDisplay AdiValue={globalState['adi']}/>
        </div>
    )
}

export default VisualDisplay