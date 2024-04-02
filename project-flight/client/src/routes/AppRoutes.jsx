import React from 'react'
import { Route, Routes } from 'react-router-dom'
import InputPage from '../pages/Inputpage'
import Display from '../pages/Display'

const AppRoutes = () => {
  return (
<Routes>
  <Route path='/' element={<InputPage/>}/>
  <Route path='/display' element={<Display/>}/>
  <Route path='*' element={<h1>404 page not found</h1>}/>
</Routes>
  )
}

export default AppRoutes