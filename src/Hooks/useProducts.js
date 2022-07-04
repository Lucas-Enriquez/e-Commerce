import { useState } from 'react'
import { get } from '../config/eCommerceApi'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(undefined)
  const [loading, setLoading] = useState(false)

  const getAllProducts = async () => {
    setLoading(true)
    get('/products').then(result => setProducts([...result.data])).then(setLoading(false))
  }

  const getOneProduct = async (id) => {
    get(`/products/one/${id}`).then(data => setSelectedProduct(data))
  }

  return {
    // * props
    products,
    loading,
    selectedProduct,

    // * metodos
    getAllProducts,
    setLoading,
    getOneProduct
  }
}
