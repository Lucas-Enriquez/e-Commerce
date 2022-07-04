import { AuthForm } from '../Components/UI/AuthForm'
import { HiShoppingBag } from 'react-icons/hi'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// import { AuthContext } from '../context/AuthContext'
import { useAuth } from '../Hooks/useAuth'

export const LoginScreen = () => {
  const { startLogin } = useAuth()

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

        <AuthForm loginUser={startLogin} />
      </div>
      <div className='flex-1 w-screen p-4 text-lg h-3/2 shadow-inner bg-gray-200' />
    </div>

  )
}
