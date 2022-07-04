import React from 'react'

import { Link } from 'react-router-dom'
// import { ProductsContext } from '../../../context/CartContext'

const ProductCard = ({ products }) => {
  return (
    <div className='w-5/6 sm:3/6 xl:w-4/6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense justify-items-center py-5 w-4/4 m-auto'>
      {products.map(product => (
        <Link to={`/product/${product._id}`} key={product._id} className='overflow-hidden relative container w-5/6 md:w-6/6  lg:w-6/6 lg:h-full flex flex-col justify-between items-center h-full bg-white hover:shadow-xl transition-shadow ease-in rounded-md cursor-pointer shadow-md'>
          <div className='w-full flex justify-center items-center h-full max-h-56'>
            <img
              src={product.images.length >= 1 ? product.images[0] : 'https://construcaribe.s3.amazonaws.com/projects-images/13282/images/c19b5b8a-151b-4b7b-85db-302a69102826_imagenotavailable.jpg'}
              alt={product.name} className='object-cover lg:w-full h-full  w-6/6'
            />
          </div>
          <div className='product-desc w-full justify-self-end'>
            <hr />
            <div className='product-price-title px-3 h-20 flex flex-col justify-center'>
              <span className='text-gray-500 text-xl font-semibold'>${product.price}</span>
              <h2 className='text-gray-500 text-sm truncate'>{product.name}</h2>
            </div>
          </div>
        </Link>
        // </div>
      ))}
    </div>
  )
}

export default ProductCard
