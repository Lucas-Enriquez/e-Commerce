import { useContext, useRef, useEffect, useState } from 'react'

import { FaUserAlt } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { BiLogOut } from 'react-icons/bi'
import { AuthContext } from '../context/AuthContext'
import { useAuth } from '../Hooks/useAuth'

const options = ['Account', 'Settings', 'Favorites', 'My Shoppping']

export const UserDropDown = () => {
  const [isActive, setIsActive] = useState(false)
  const { startLogout } = useAuth()
  const { user } = useContext(AuthContext)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const dropDownButton = useRef(null)

  const handleStopPropagation = (e) => {
    e.stopPropagation()
  }

  useEffect(() => {
    const clickOutside = (e) => {
      if (!dropDownButton.current.contains(e.target)) {
        setIsActive(false)
      }
    }
    document.body.addEventListener('click', clickOutside)

    return () => document.body.removeEventListener('click', clickOutside)
  }, [isActive])

  return (
    <>
      <div ref={dropDownButton} className='relative transition-colors ease-linear' onClick={(e) => handleClick(e)}>
        <FaUserAlt className='user-icon hover:opacity-50 bg-slate-50 p-2 rounded-full' />
        {isActive &&
          <div onClick={(e) => handleStopPropagation(e)} className='fixed w-screen bg-white p-5 pb-0 z-10 top-0 right-0 h-full text-center font-medium text-xl text-gray-700 bg-opacity-95 md:bg-opacity-100 md:absolute md:top-12 md:rounded md: md:w-56 md:h-auto md:text-left md:font-thin md:text-lg animate__animated animate__fadeIn animate__fast'>
            <div className='md:hidden mb-10 sm:flex md:justify-end md:w-full' onClick={handleClick}><GrClose /></div>
            <ul className='flex flex-col gap-5 cursor-default'>
              <div className='mb-2'>
                <h6 className='cursor-default'>Hi {user.name}!</h6>
                <hr />
              </div>
              {options.map((option) => (
                <div key={option}>
                  <li className='mb-1 hover:text-gray-400 transition-colors ease-in cursor-pointer'>
                    {option}
                  </li>
                  <hr />
                </div>
              ))}
              <button onClick={startLogout} className='p-2 border-2 border-blue-500 rounded-md m-auto w-full mb-2 text-gray-700 h-auto'><div className='flex items-center justify-center gap-2'><BiLogOut size='1.2em' />  Logout</div></button>
            </ul>
          </div>}
      </div>

    </>
  )
}
