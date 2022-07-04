import { HiShoppingBag } from 'react-icons/hi'
import { AuthForm } from '../Components/UI/AuthForm'
import { useAuth } from '../Hooks/useAuth'

export const RegisterScreen = () => {
  const { startSignUp, registerErrors } = useAuth()

  return (
    <>
      <div className='bg-gray-500 flex flex-col h-screen'>
        <div className='w-screen h-3/2 bg-gray-100 p-5'>
          <nav className='mb-10 flex justify-center'>
            <div className='bg-gray-900 flex max-w-screen-md py-2 px-5 shadow-xl rounded cursor-pointer'>
              <div className='flex justify-start gap-2'>
                <h2 className='text-slate-200 text-2xl capitalize select-none'>
                  e-commerce
                </h2>
                <HiShoppingBag size='2em' color='white' width='310' />
              </div>
            </div>
          </nav>

          <AuthForm registerUser={startSignUp} />
          {registerErrors.errors && (
            <div className='gap-2 flex flex-col w-auto max-w-screen-md mx-auto m-5 text-center'>
              {registerErrors.messages.map((error, idx) => (
                <div
                  key={idx}
                  className='bg-red-200 py-3 rounded-md gap-2 flex flex-col'
                >
                  <p className='text-red-700'>{error.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* <div className='flex-1 w-screen p-4 text-lg h-3/2 shadow-lg bg-gray-200' /> */}
        <div className='flex-1 w-screen p-4 text-lg h-3/2 shadow-inner bg-gray-200' />
      </div>

    </>
  )
}
