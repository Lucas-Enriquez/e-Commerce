import { useForm } from '../../Hooks/useForm'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const AuthForm = ({ registerUser, loginUser }) => {
  const [formValues, handleInputChange] = useForm()

  const { pathname } = useLocation()

  const handleSubmitForm = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    console.log(formValues)
  }, [formValues])

  return (
    <div className='form-container flex justify-around flex-col'>
      <form
        autoComplete='off'
        onSubmit={handleSubmitForm}
        className='border-1 rounded border-gray-300 bg-white p-4 w-full max-w-md mx-auto flex flex-col gap-5 pt-2 h-full'
      >
        <h1 className='text-stone-900 text-4xl text-center'>{pathname === '/auth/login' ? 'Welcome Back!' : 'Create an account'}</h1>
        {pathname === '/auth/register' && (
          <div className='flex flex-col gap-2'>
            <label>Your Name</label>
            <input
              className='ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-3 focus:ring-orange-400 shadow-md focus:shadow-orange-400 px-4 py-2 transition ease-in-out'
              placeholder='e.g: Pedro'
              type='text'
              name='name'
              autoComplete='new-password'
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className='flex flex-col gap-2'>
          <label>Email</label>
          <input
            className='ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-orange-400 shadow-md focus:shadow-orange-400 px-4 py-2 transition ease-in-out'
            placeholder='email@example.com'
            type='email'
            name='email'
            autoComplete='new-password'
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label>Password</label>
          <input
            className='ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-orange-400 shadow-md focus:shadow-orange-400 px-4 py-2 transition ease-in-out'
            placeholder='email@example.com'
            type='password'
            name='password'
            autoComplete='new-password'
            onChange={handleInputChange}
          />
        </div>
        {pathname === '/auth/register' && <p>Already registered? <Link to='/auth/login' className='text-blue-700 hover:text-blue-400 hover:underline'>Login</Link></p>}
        {pathname === '/auth/register'
          ? (<button onClick={() => registerUser(formValues)} type='submit' className='font-bold bg-blue-500 text-zinc-50 px-5 py-2 rounded hover:bg-blue-400 ease-in duration-150'>Create Account</button>)
          : (<button onClick={() => loginUser(formValues)} type='submit' className='font-bold bg-blue-500 text-zinc-50 px-5 py-2 rounded hover:bg-blue-400 ease-in duration-150'>Login</button>)}
      </form>
      {pathname === '/auth/login' &&
        <button className='bg-gradient-to-r text-gray-500 w-72 mt-5 mx-auto p-2 rounded-lg'>
          <Link to='/auth/register' className='hover:underline font-semibold'>Create your E-Commerce account</Link>
        </button>}

    </div>
  )
}
