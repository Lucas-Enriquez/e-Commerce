import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const PublicRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext)
  return logged ? <Navigate to='/' /> : children
}
