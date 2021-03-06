import { useReducer, useLayoutEffect } from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from '../Components/UI/Navbar'
import { ProductsContext } from '../context/CartContext'
import { Cart } from '../Pages/dashboard/Cart'
import { CheckoutScreen } from '../Pages/dashboard/CheckoutScreen'
import { HomeScreen } from '../Pages/dashboard/HomeScreen'
import { Product } from '../Pages/dashboard/Product'
import { Sell } from '../Pages/dashboard/Sell'
import { cartReducer, initialState } from '../Reducers/cartReducer'

export const ScrollToTop = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}

export const DashboardRoutes = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <>
      <ProductsContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <ScrollToTop>
          <Routes>
            {/* <Route path="/*" element={<Navigate to={"/"}/>}/> */}
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<CheckoutScreen />} />
            <Route path='sell' element={<Sell />} />
          </Routes>
        </ScrollToTop>
      </ProductsContext.Provider>
    </>
  )
}
