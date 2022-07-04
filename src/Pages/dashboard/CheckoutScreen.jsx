import { useEffect, useState } from 'react'
import { get } from '../../config/eCommerceApi'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { CheckoutForm } from '../../Components/UI/CheckoutForm'

// export const stripePK = 'pk_test_51KTd1dCxJ8HWxsAUvHdkJU90wXuUHO4qa4bF5dq3A7kCPWLAiaPnQ4bDpvBqIVMHPdABDwVMODmDff6jl8ok59OJ00SeHORvaW'

export const CheckoutScreen = () => {
  // const { state, dispatch } = useContext(ProductsContext)

  const [clientSecret, setClientSecret] = useState()

  useEffect(() => {
    get('/cart/pay')
      .then(data => setClientSecret(data.clientSecret))
      .catch(console.log)
  }, [])

  const stripe = loadStripe('pk_test_51KTd1dCxJ8HWxsAUvHdkJU90wXuUHO4qa4bF5dq3A7kCPWLAiaPnQ4bDpvBqIVMHPdABDwVMODmDff6jl8ok59OJ00SeHORvaW')

  return (
    <main className='bg-slate-100 min-h-screen pt-5'>

      {/* Provider */}
      {clientSecret &&
        <Elements stripe={stripe} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>}
    </main>
  )
}
