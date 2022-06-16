import React, { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../Components/UI/Footer'
import { AuthContext } from '../context/AuthContext'
import { initialState, userInfoReducer } from '../Reducers/userReducer'
import { AuthRoutes } from './AuthRoutes'
import { DashboardRoutes } from './DashboardRoutes'
import { ProtectedRoutes } from './ProtectedRoutes'
import { PublicRoutes } from './PublicRoutes'

function AppRouter () {
  const [state, dispatch] = useReducer(userInfoReducer, initialState)

  return (
    <AuthContext.Provider value={{ user: state.user, logged: state.logged, setUser: dispatch }}>
      <Routes>
        {/* <Route path="/*" element={<Navigate to={"/"}/>}/> */}
        <Route path='/' element={<ProtectedRoutes><DashboardRoutes /></ProtectedRoutes>} />
        <Route path='/auth/*' element={<PublicRoutes><AuthRoutes /></PublicRoutes>} />
      </Routes>

      <Footer />
    </AuthContext.Provider>
  )
}

export default AppRouter
