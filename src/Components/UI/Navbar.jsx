import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/image.png'
import { UserDropDown } from '../UserDropDown'

export const Navbar = () => {
  return (
    <nav className='bg-white border-gray-200  dark:bg-gray-800 flex flex-col gap-3'>
      {/* Superior part */}
      <div className='flex justify-center items-center gap-5 px-5 pt-3'>
        <div className='flex flex-wrap flex-col'>
          <Link to='/' className='flex items-center'>
            <img
              src={logo}
              className='mr-3 h-10 sm:h-15 '
              alt='Tzuzul Logo'
            />
            <span className='self-center font-semibold whitespace-nowrap dark:text-white hidden lg:block lg:text-lg'>
              E-Commerce
            </span>
          </Link>
        </div>
        <input type='text' id='search-navbar' className='w-2/3 max-w-4xl block p-2 pl-10 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Search...' />
        <AiOutlineShoppingCart className='shopping-cart-icon' />
        <UserDropDown />
      </div>
      {/* Superior part */}

      {/* Lower part */}
      <div className='dark:bg-gray-700 flex justify-start py-2 px-5 shadow-sm'>
        <button
          data-collapse-toggle='mobile-menu'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='mobile-menu'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
          <svg
            className='hidden w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='mobile-menu'>
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
            <li>
              <Link
                to='/catalog'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold transition-all ease-in-out'
              >
                All
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-normal transition-all ease-in-out'
              >
                Today's Deals
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-normal transition-all ease-in-out'
              >
                Customer Service
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-normal transition-all ease-in-out'
              >
                Registry
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-normal transition-all ease-in-out'
              >
                Gift Cards
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-normal transition-all ease-in-out'
              >
                Sell
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}