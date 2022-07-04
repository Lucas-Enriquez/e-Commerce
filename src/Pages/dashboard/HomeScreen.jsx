import React, { Suspense, useEffect /* useState */ } from 'react'
import { Spinner } from '../../Components/UI/Spinner'
import { useProducts } from '../../Hooks/useProducts'
// import { getProducts } from '../../utils/getProducts'

import { Header } from './components/Header'
// import { Pagination } from './components/Pagination'

const ProductCard = React.lazy(() => import('./components/ProductCard'))

export const HomeScreen = () => {
  const { products, getAllProducts } = useProducts()

  useEffect(() => {
    getAllProducts()
  }, [])

  // const [products, setProducts] = useState([])

  // const [page, setPage] = useState(1)
  // const [productsPerPage, setProductsPerPage] = useState(10)

  // useEffect(() => {
  //   getProducts().then((products) => setProducts(products))
  // }, [page])

  // const indexOfLastProduct = page * productsPerPage
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <>
      <Header />
      <main className='bg-gray-100 min-h-max pb-5'>
        <Suspense fallback={<Spinner />}>
          <ProductCard products={products} />
        </Suspense>
        {/* <Pagination products={products} productsPerPage={productsPerPage} page={page} setPage={setPage} setProductsPerPage={setProductsPerPage} /> */}
      </main>
    </>
  )
}
