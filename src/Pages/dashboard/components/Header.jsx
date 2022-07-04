import React, { useEffect, useState } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'

export const Header = () => {
  const images = ['bg-header-img_1', 'bg-header-img_2', 'bg-header-img_3', 'bg-header-img_4']

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[selectedIndex])

  const previous = () => {
    if (selectedIndex > 0) {
      const index = selectedIndex - 1
      console.log(index)
      setSelectedIndex(index)
      setSelectedImage(images[index])
    } else {
      const index = images.length - 1
      setSelectedImage(images[index])
      setSelectedIndex(index)
    }
  }

  const next = () => {
    if (selectedIndex < images.length - 1) {
      const index = selectedIndex + 1
      setSelectedIndex(index)
      setSelectedImage(images[index])
      // console.log(index)
    }
    if (selectedIndex === 3) {
      const index = 0
      setSelectedImage(images[index])
      setSelectedIndex(index)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [selectedImage])

  return (
    <>
      <header className={`relative bg-center ${selectedImage} transition-all ease-in h-96 bg-no-repeat bg-cover flex justify-center items-center bg-black bg-opacity-100`}>
        <div className='absolute inset-0 bg-gray-900 bg-opacity-50' />
        <div className='max-w-lg w-full h-auto flex justify-center items-center relative '>
          <h1 className='text-white font-thin tracking-wide italic p-7 border-2 border-white text-5xl text-center'>
            Eso que buscas
          </h1>
          <div className='absolute gap-5 flex top-48'>
            <button className='outline-none border-2 border-slate-400 bg-slate-100 p-3 rounded-full font-extrabold hover:opacity-70 transition-opacity ease-out' onClick={previous}><GrPrevious /></button>
            <button className='outline-none border-2 border-slate-400 bg-slate-100 p-3 rounded-full font-extrabold hover:opacity-70 transition-opacity ease-out' onClick={next}><GrNext /></button>
          </div>
        </div>
      </header>
      <div className='flex justify-between w-32 m-auto' />
    </>
  )
}
