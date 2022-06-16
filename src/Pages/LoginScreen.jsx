import React, { useState, useContext } from 'react'
import { AuthForm } from '../Components/UI/AuthForm'
import { HiShoppingBag } from 'react-icons/hi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

export const LoginScreen = () => {
  const [loginErrors, setLoginErrors] = useState({
    errors: false,
    messages: []
  })

  const { setUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const loginUser = async (userData) => {
    try {
      const url = 'https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/login'
      const { data } = await axios.post(url, userData)
      console.log(data)

      // Despachar la información del usuario e iniciar sesión
      setUser({ type: 'LOGIN', payload: data.user })

      navigate('/')
    } catch (error) {
      const { errors } = error.response.data
      setLoginErrors({ errors: true, messages: [...errors] })
    }
  }
  console.log(loginErrors)

  return (
    <div className='bg-gray-500 flex flex-col h-screen'>
      <div className='w-screen h-3/2 bg-gray-100 p-5'>
        <nav className='mb-10 flex justify-center'>
          <div className='bg-gray-900 flex max-w-screen-md py-2 px-5 shadow-xl rounded-b cursor-pointer'>
            <div className='flex justify-start gap-2'>
              <h2 className='text-slate-200 text-2xl capitalize select-none'>
                e-commerce
              </h2>
              <HiShoppingBag size='2em' color='white' width='310' />
            </div>
          </div>
        </nav>

        <AuthForm loginUser={loginUser} />
        {loginErrors.errors && (
          <div className='gap-2 flex flex-col w-auto max-w-screen-md mx-auto m-5 text-center'>
            {loginErrors.messages.map((error, idx) => (
              <div
                key={idx}
                className='bg-red-200 py-3 rounded-md gap-2 flex flex-col'
              >
                <p className='text-red-700'>{error}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='flex-1 w-screen p-4 text-lg h-3/2 shadow-inner bg-gray-200' />
    </div>

  )
}
