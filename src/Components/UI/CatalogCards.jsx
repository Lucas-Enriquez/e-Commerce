import React from 'react'

import { Link } from 'react-router-dom'
// import { ProductsContext } from '../../../context/CartContext'

const CatalogCards = ({ products }) => {
  return (
    <div className='w-5/6 sm:3/6 md:w-5/6 flex flex-col gap-4 grid-flow-row-dense justify-items-center py-5 w-4/4 m-auto'>

      {products.map(product => (

        <Link to={`/product/${product.id}`} key={product.id} className='relative container w-6/6 md:w-6/6  lg:w-6/6 lg:h-full flex flex-col justify-between items-center h-full aaa bg-white hover:shadow-lg transition-shadow ease-in rounded-md cursor-pointer'>
          <div className='w-full flex justify-center items-center h-full'>
            <img src={product.thumbnailUrl} alt={product.title} className='justify-self-center self-center object-contain max-h-56 w-4/6' />
          </div>
          <div className='product-desc w-full justify-self-end'>
            <hr />
            <div className='product-price-title px-3 h-20 flex flex-col justify-center'>
              <span className='text-gray-500 text-xl font-semibold'>${product.price}</span>
              <h2 className='text-gray-500 text-sm truncate'>{product.title}</h2>
            </div>
          </div>
        </Link>
        // </div>
      ))}
    </div>
  )
}

export default CatalogCards
