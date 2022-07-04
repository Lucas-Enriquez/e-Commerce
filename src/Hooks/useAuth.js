import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { eCommerceApi } from '../config/eCommerceApi'
import { AuthContext } from '../context/AuthContext'

export const useAuth = () => {
  const [loginErrors, setLoginErrors] = useState({
    errors: false,
    messages: undefined
  })

  const [registerErrors, setRegisterErrors] = useState({
    errors: false,
    messages: []
  })

  const { setUser } = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (loginErrors.messages !== undefined) {
      Swal.fire({ icon: 'error', title: 'Error!', text: loginErrors.messages })
    }
  }, [loginErrors.messages])

  const startLogin = async (userData) => {
    try {
      const { data } = await eCommerceApi.post('/auth/login', userData, {
        withCredentials: true
      })
      setUser({ type: 'LOGIN', payload: data.user })
      navigate('/')
    } catch (error) {
      const { errors } = error.response.data
      setLoginErrors({ errors: true, messages: errors })
    }
  }

  const startSignUp = async (userData) => {
    try {
      const response = await eCommerceApi.post('auth/signup', userData, {
        withCredentials: true
      })
      // DISPATCH EL USER INFO
      setUser({ type: 'LOGIN', payload: response.data.user })

      navigate('/')
    } catch (error) {
      const { errors } = error.response.data
      setRegisterErrors({ errors: true, messages: [...errors] })
    }
  }

  const startLogout = async () => {
    await eCommerceApi.get('auth/logout', {
      withCredentials: true
    })
    await setUser({ type: 'LOGOUT' })
  }

  return {
    // * props
    loginErrors,
    registerErrors,

    // * métodos
    startLogin,
    startSignUp,
    startLogout
  }
}
