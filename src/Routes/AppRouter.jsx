import React, { useReducer, useEffect } from 'react'

import { Route, Routes } from 'react-router-dom'
import { Footer } from '../Components/UI/Footer'
import { get } from '../config/eCommerceApi'
import { AuthContext } from '../context/AuthContext'
import { initialState, userInfoReducer } from '../Reducers/userReducer'
import { AuthRoutes } from './AuthRoutes'
import { DashboardRoutes } from './DashboardRoutes'
import { ProtectedRoutes } from './ProtectedRoutes'
import { PublicRoutes } from './PublicRoutes'

function AppRouter () {
  const [state, dispatch] = useReducer(userInfoReducer, initialState)

  useEffect(() => {
    get('/auth/validate')
      .then(result => {
        dispatch(
          { type: 'LOGIN', payload: result.user }
        )
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <AuthContext.Provider value={{ user: state.user, logged: state.logged, setUser: dispatch }}>
      <Routes>
        {/* <Route path='/*' element={<Navigate to='/' />} /> */}
        <Route
          path='/*' element={
            <>

              <ProtectedRoutes>
                <DashboardRoutes />
              </ProtectedRoutes>
            </>
}
        />
        <Route path='/auth/*' element={<PublicRoutes><AuthRoutes /></PublicRoutes>} />
      </Routes>
      <Footer />
    </AuthContext.Provider>
  )
}

export default AppRouter
