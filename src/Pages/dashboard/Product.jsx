import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Spinner } from '../../Components/UI/Spinner'
import { eCommerceApi, post } from '../../config/eCommerceApi'

import { useCart } from '../../Hooks/useCart'

export const Product = () => {
  const { productId } = useParams()

  const [selectedProduct, setselectedProduct] = useState(undefined)

  const navigate = useNavigate()

  const { getMyCart, items } = useCart()

  useEffect(() => {
    const getProduct = async (id) => {
      const { data } = await eCommerceApi.get(`/products/one/${id}`, {
        withCredentials: true
      })
      setselectedProduct(data)
    }
    getProduct(productId)
  }, [])

  const handleAddToCart = (id) => {
    post('/cart/add', {
      idProduct: id,
      amount: 1
    }).then(Swal.fire(
      'Product added',
      'You will be redirected to your cart',
      'success'
    ))
    getMyCart()
    setTimeout(() => {
      navigate('/cart')
    }, 2000)
  }

  return (
    <>
      <main className='bg-gray-100 min-h-screen'>
        <div className='w-6/6 pt-5 px-3 m-auto md:max-w-2xl xl:w-3/6'>
          {
          selectedProduct === undefined
            ? <Spinner />
            : <div key={selectedProduct._id} className='bg-white px-3 py-4 flex flex-col gap-5 justify-between items-center md:flex-row'>
              <div className='flex gap-1 flex-col '>
                <div className='self-center md:self-start flex gap-2 max-h-14'>
                  {selectedProduct.images.map((image, idx) => (<img width='50px' height='50px' key={idx} className='border overflow-hidden object-cover' src={image} />))}
                </div>
                <div className='flex flex-col gap-5 md:flex-row'>
                  <div className='img-container md:w-96 flex  justify-center rounded-sm overflow-hidden'>
                    <img className='md:w-full aa justify-self-center self-center object-contain max-h-96 w-4/6' src={selectedProduct.images[0]} />
                  </div>
                </div>
                <div className='button-container flex gap-5 flex-col items-start mt-5 w-6/6 md:max-w-lg lg:max-w-4/6 xl:w-90'>
                  <div className='top-part flex w-full text-left md:basis-2'>
                    <h1 className='text-gray-700 text-xl font-medium font-sans'>{selectedProduct.name}</h1>
                  </div>
                  <div className='w-80 flex flex-col gap-2'>
                    <h6 className='text-gray-700 font-normal text-lg w-full'>Price: <span className='text-red-700 text-xl'>${selectedProduct.price.toFixed(3)}</span></h6>
                    <span>About this product: </span>
                    <p className='w-full self-center text-sm'>{selectedProduct.description}</p>
                  </div>
                </div>
              </div>
              <div className='btn-container w-4/6 md:w-2/6 flex flex-col gap-2 md:self-start md:mt-14'>
                <button onClick={() => handleAddToCart(selectedProduct._id)} className='bg-yellow-400 text-sm text-slate-800 p-2 rounded-3xl w-full font-normal hover:shadow-xl hover:bg-yellow-500 transition-all ease-in-out'>Add to cart</button>
                <button className='bg-orange-400 p-2 rounded-3xl w-full font-normal hover:shadow-xl text-sm hover:bg-orange-500 transition-all ease-in-out'>Buy now</button>
              </div>
            </div>
}
        </div>
      </main>
    </>
  )
}
