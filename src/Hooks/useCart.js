import { useContext, useState } from 'react'
import { eCommerceApi } from '../config/eCommerceApi'
import { ProductsContext } from '../context/CartContext'

export const useCart = () => {
  //! NO USAR STATE CON ITEMS

  const [items, setItems] = useState([])
  const { state, dispatch } = useContext(ProductsContext)

  const getMyCart = async () => {
    const { data } = await eCommerceApi.get('/cart', {
      withCredentials: true
    })
    console.log(data)
    dispatch({ type: 'UPDATE', payload: data })
  }

  const deleteFromCart = async (data) => {
    try {
      const res = await eCommerceApi.delete('/cart/remove', { withCredentials: true, data })
      await dispatch({ type: 'UPDATE', payload: data })

      setItems(res.data)
    } catch ({ response }) {
      console.log(response.data)
    }
  }
  return {
    //* props
    items,
    state,

    //* metodos
    getMyCart,
    deleteFromCart
  }
}
