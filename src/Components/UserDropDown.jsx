import { useRef, useEffect, useState } from 'react'

import { FaUserAlt } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'

const options = ['Account', 'Settings', 'Favorites', 'My Shoppping', 'Logout']

export const UserDropDown = () => {
  const [isActive, setIsActive] = useState(false)

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
      <div ref={dropDownButton} className='relative transition-colors ease-linear cursor-pointer' onClick={(e) => handleClick(e)}>
        <FaUserAlt className='user-icon hover:opacity-50 bg-slate-50 p-2 rounded-full' />
        {isActive &&
          <div onClick={(e) => handleStopPropagation(e)} className='fixed w-screen bg-white p-5 pb-0 z-10 top-0 right-0 h-full text-center font-medium text-xl text-gray-700 bg-opacity-95 md:bg-opacity-100 md:absolute md:top-12 md:rounded md: md:w-48 md:h-auto md:text-left md:font-thin md:text-lg animate__animated animate__fadeIn animate__fast'>
            <div className='md:hidden mb-10 sm:flex md:justify-end md:w-full' onClick={handleClick}><GrClose /></div>
            <ul className='flex flex-col gap-6'>
              {options.map((option) => (
                <div key={option}>
                  <li className='mb-2 hover:text-gray-400 transition-colors ease-in'>
                    {option}
                  </li>
                  <hr />
                </div>
              ))}
            </ul>
          </div>}
      </div>
    </>
  )
}
