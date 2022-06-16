import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../Pages/LoginScreen'
import { RegisterScreen } from '../Pages/RegisterScreen'

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />

      </Routes>
    </>
  )
}
