import { useEffect, useContext } from 'react'
import { put } from '../../config/eCommerceApi'

import { ProductsContext } from '../../context/CartContext'
import { useCart } from '../../Hooks/useCart'

import { useNavigate } from 'react-router-dom'

// export const stripePK = 'pk_test_51KTd1dCxJ8HWxsAUvHdkJU90wXuUHO4qa4bF5dq3A7kCPWLAiaPnQ4bDpvBqIVMHPdABDwVMODmDff6jl8ok59OJ00SeHORvaW'

export const Cart = () => {
  const { state, dispatch } = useContext(ProductsContext)

  const navigate = useNavigate()

  // const prices = state.items.map(product => product.modifiedPrice)

  // const total = prices.reduce((acc, el) => acc + el, 0).toFixed(3)

  const prices = state.items.map(item => item.price * item.amount)

  const total = prices.reduce((acc, el) => acc + el, 0)
  console.log(total)

  const { getMyCart, deleteFromCart, items } = useCart()

  useEffect(() => {
    getMyCart()
    dispatch({ type: 'UPDATE', payload: state.items })
  }, [state.items.length])

  console.log({ state })

  const handleDeleteItem = (id) => {
    deleteFromCart({ idProduct: id }).then(() => dispatch({ type: 'UPDATE', payload: items }))
  }

  const handleIncreaseAmount = (id, amount) => {
    put('/cart/changeAmount', {
      idProduct: id,
      amount: amount + 1
    }).then(dispatch({ type: 'UPDATE', payload: state.items })).then(() => dispatch({ type: 'UPDATE', payload: items }))
  }

  const handleDecreaseAmount = (id, amount) => {
    if (amount === 1) return

    put('/cart/changeAmount', {
      idProduct: id,
      amount: amount - 1
    }).then(dispatch({ type: 'UPDATE', payload: state.items })).then(() => dispatch({ type: 'UPDATE', payload: items }))
  }

  return (
    <main className='bg-slate-100 min-h-screen pt-5'>
      <div className=' flex justify-center w-screen'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-md md:w-full lg:w-5/6 h-full m-auto'>
          {state.items.length === 0 &&
            <div className='w-full h-full bg-white p-16 flex justify-center items-center flex-col gap-2'>
              <div className='text-center'>
                <h3 className='text-4xl text-gray-400 font-thin mb-2'>Your cart is empty</h3>
                <small className='text-lg text-gray-400 font-thin'>Thousands of products are waiting for you!</small>
              </div>
            </div>}

          {state.items.length > 0 &&
            <div className='w-full h-full bg-white p-7 flex flex-col gap-10'>
              {state.items.map(product => (
                <div key={product._id} className='max-h-40'>
                  <div className='w-full max-h-40 text-sm text-left flex gap-2 justify-between'>
                    <div className='img-container w-20 max-h-full'>
                      <img src={product.images[0]} className='w-full max-h-14 object-contain' />
                    </div>
                    <div className='item-information flex w-full justify-between'>
                      <div className='title-container max-w-96 flex flex-col justify-between '>
                        <h3 className='font-semibold text-lg text-gray-900 truncate'>{product.name}</h3>
                        <ul className='options-container w-96 flex gap-6'>
                          <li><button onClick={() => handleDeleteItem(product._id)} className='text-blue-500 hover:underline'>Delete</button></li>
                          <li><button className='text-blue-500 hover:underline'>More products from the seller</button></li>
                        </ul>
                      </div>
                      <div className='container quantity-selector__container flex items-center w-auto h-full border rounded-md py-2 px-2 gap-2'>
                        <button onClick={() => handleDecreaseAmount(product._id, product.amount)} className='border-gray-300 px-2 text-2xl  text-blue-600 hover:text-blue-300 transition-colors ease-in-out'>-</button>
                        <span className='text-lg font-normal text-gray-700'>{product.amount}</span>
                        <button onClick={() => handleIncreaseAmount(product._id, product.amount)} className='border-gray-300 px-2 text-2xl  text-blue-600 hover:text-blue-300 transition-colors ease-in-out'>+</button>
                      </div>
                      <div className='price__container flex items-center'>
                        <h3 className='text-xl'>${product.price * product.amount}</h3>
                      </div>
                    </div>
                  </div>
                  <hr className='mt-4' />
                </div>
              ))}
              <div className='total__container flex justify-end py-2'>
                <h4 className='font-light text-2xl'>Total: ${total}</h4>
              </div>
              <hr />
              <button onClick={() => navigate('/checkout')} className='p-3 text-white font-thin bg-blue-500 w-48 rounded-md self-end hover:bg-blue-400 transition-colors ease-in-out'>Continue to checkout</button>
            </div>}
        </div>
      </div>

    </main>
  )
}
