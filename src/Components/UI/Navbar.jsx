import { useContext, useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/image.png'
import { ProductsContext } from '../../context/CartContext'
import { UserDropDown } from '../UserDropDown'
import { LowerNavSection } from './LowerNavSection'

export const Navbar = () => {
  const { state, dispatch } = useContext(ProductsContext)

  useEffect(() => {
    dispatch({ type: 'UPDATE', payload: state.items })
  }, [state.items.length])

  return (
    <nav className='bg-white border-gray-200  dark:bg-gray-800 flex flex-col gap-3'>
      {/* Superior section */}
      <div className='flex justify-center items-center gap-5 px-5 pt-3'>
        <div className='flex flex-wrap flex-col'>
          <Link to='/' className='flex items-center'>
            <img
              src={logo}
              className='mr-3 h-10 sm:h-15 object-contain'
              alt='Tzuzul Logo'
            />
            <span className='self-center font-semibold whitespace-nowrap dark:text-white hidden lg:block lg:text-lg'>
              E-Commerce
            </span>
          </Link>
        </div>
        <input type='text' id='search-navbar' className='w-2/3 max-w-4xl block p-2 pl-10 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none ' placeholder='Search...' />
        <div className='relative'>
          <Link to='/cart'><AiOutlineShoppingCart className='shopping-cart-icon' /></Link>
          {state.items.length >= 1
            ? <span className='bg-white rounded-full px-1 absolute bottom-4 left-6 text-xs'>{state.items.length}</span>
            : <></>}
        </div>
        <UserDropDown />
      </div>

      {/* Bottom section */}
      <LowerNavSection />
    </nav>
  )
}
