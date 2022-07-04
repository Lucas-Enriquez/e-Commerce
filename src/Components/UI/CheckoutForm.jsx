import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { useContext } from 'react'
import Swal from 'sweetalert2'
import { ProductsContext } from '../../context/CartContext'

export const CheckoutForm = () => {
  const { dispatch } = useContext(ProductsContext)
  const stripe = useStripe()
  const elements = useElements()

  const pay = async (event) => {
    event.preventDefault()
    const { paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required'
    })
    console.log({ paymentIntent })
    if (paymentIntent.status === 'succeeded') {
      Swal.fire(
        'Successful payment!',
        `Transaction id: ${paymentIntent.id}`,
        'success'
      )
      dispatch({ type: 'UPDATE', payload: [] })
    }
  }
  return (
    <form onSubmit={pay} className='w-5/6 m-auto lg:w-3/6 xl:w-3/6 bg-white p-5 rounded-md shadow-md'>
      <PaymentElement id='payment-element' />
      <button className='bg-slate-700 w-full text-white mt-2 rounded-md p-2 hover:bg-slate-500 transition-colors ease-in'>Pay</button>
    </form>
  )
}
