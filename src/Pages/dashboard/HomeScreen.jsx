import React from 'react'
import { Header } from './components/Header'

export const HomeScreen = () => {
  return (
    <>
      <Header />
      <main className='bg-slate-100 '>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense justify-items-center py-5 max-w-7xl m-auto'>

          <div className='relative overflow-hidden bg-no-repeat bg-cover max-w-xs cursor-pointer'>
            <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' className='max-w-xs' alt='Louvre' />
            <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70' />
          </div>
          <div className='relative overflow-hidden bg-no-repeat bg-cover max-w-xs cursor-pointer'>
            <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' className='max-w-xs' alt='Louvre' />
            <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70' />
          </div>
          <div className='relative overflow-hidden bg-no-repeat bg-cover max-w-xs cursor-pointer'>
            <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' className='max-w-xs' alt='Louvre' />
            <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70' />
          </div>
          <div className='relative overflow-hidden bg-no-repeat bg-cover max-w-xs cursor-pointer'>
            <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' className='max-w-xs' alt='Louvre' />
            <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70' />
          </div>
          <div className='relative overflow-hidden bg-no-repeat bg-cover max-w-xs cursor-pointer'>
            <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' className='max-w-xs' alt='Louvre' />
            <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70' />
          </div>
          <div className='relative overflow-hidden bg-no-repeat bg-cover max-w-xs cursor-pointer'>
            <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' className='max-w-xs' alt='Louvre' />
            <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70' />
          </div>

        </div>

      </main>
    </>
  )
}
