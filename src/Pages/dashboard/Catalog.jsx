import React, { Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CatalogCards from '../../Components/UI/CatalogCards'
import { getProducts } from '../../utils/getProducts'
import { Pagination } from './components/Pagination'

const Catalog = () => {
  const { pageNumber } = useParams()
  console.log(pageNumber)

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(4)

  useEffect(() => {
    getProducts().then((products) => setProducts(products))
  }, [page])

  const indexOfLastProduct = page * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  return (
    <>
      <main className='bg-gray-100 min-h-max pb-5'>
        <Suspense fallback={<h1>WAIT</h1>}>
          <CatalogCards products={currentProducts} />
        </Suspense>
        <Pagination products={products} productsPerPage={productsPerPage} page={page} setPage={setPage} setProductsPerPage={setProductsPerPage} />
      </main>
    </>
  )
}

export default Catalog
