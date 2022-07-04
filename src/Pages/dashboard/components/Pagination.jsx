import React from 'react'

export const Pagination = ({ setPage, page, products, productsPerPage }) => {
  const handlePreviousPage = () => {
    if (page === 1) return
    setPage(page - 1)
  }

  const handleNextPage = () => {
    // if (page === 1) return
    if (page === maxPage) return
    setPage(page + 1)
  }

  const maxPage = Math.ceil(products.length / productsPerPage)
  const numberPages = []

  for (let i = 1; i <= maxPage; i++) {
    numberPages.push(i)
  }

  return (
    <nav className='flex justify-center gap-2'>
      <button onClick={handlePreviousPage} className='bg-slate-400 px-4 py-3 font-bold text-white text-xl hover:bg-slate-600 transition-colors ease-in-out rounded-full'>{'<'}</button>
      {numberPages.map(page => (
        <button key={page}>
          {page}
        </button>
      ))}
      <button onClick={handleNextPage} className='bg-slate-400 px-4 py-3 font-bold text-white text-xl hover:bg-slate-600 transition-colors ease-in-out rounded-full'>{'>'}</button>
    </nav>
  )
}
