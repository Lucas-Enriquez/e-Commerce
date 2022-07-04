import Swal from 'sweetalert2'
import { post } from '../../config/eCommerceApi'
import { useForm } from '../../Hooks/useForm'

export const Sell = () => {
  // const [productInfo, setProductInfo] = useState({ name: '', description: '', price: undefined, images: [] })

  const [formValues, handleInputChange] = useForm()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formValues.name === '' || formValues.price === '' || formValues.description === '' || formValues.images.length < 1) {
      Swal.fire('Campos Incompletos', 'Rellena todos los campos', 'error')
    } else {
      const arrImages = formValues.images.split(',')
      formValues.images = arrImages
      post('/products', formValues)
    }
  }

  return (
    <>
      <header className='sell-header relative bg-center transition-all ease-in h-96 bg-no-repeat bg-cover flex justify-center items-center bg-black bg-opacity-100'>
        <div className='absolute inset-0 bg-gray-900 bg-opacity-50' />
        <div className='max-w-lg w-full h-auto flex justify-center items-center relative '>
          <h1 className='text-white font-thin tracking-wide italic p-7 border-2 border-white text-4xl text-center'>
            Selling your products has never been so easy
          </h1>
          <div className='absolute gap-5 flex top-48' />
        </div>
      </header>

      <main className='bg-slate-100 min-h-screen pt-5 flex justify-center'>
        <div className='h-full mb-11 bg-white px-4 py-10 rounded-md shadow-lg flex w-5/6 md:max-w-2xl'>
          <form onSubmit={handleSubmit} className='w-full '>
            <div className='flex flex-col w-full'>
              <label className='text-left font-medium text-gray-500 mb-2'>Product Title</label>
              <input onChange={handleInputChange} name='name' className='w-6/6 h-10 rounded-md border-2 py-2 px-3' />
            </div>
            <div className='flex flex-col w-full'>
              <label className='text-left font-medium text-gray-500 mb-2'>Price:</label>
              <input onChange={handleInputChange} name='price' type='number' className='w-4/4 h-10 rounded-md border-2 py-2 px-3' />
            </div>
            <div className='flex flex-col w-full'>
              <label className='text-left font-medium text-gray-500 mb-2'>place the links of the images of your product:</label>
              <input onChange={handleInputChange} name='images' className='h-10 rounded-md border-2 py-2 px-3' />
            </div>
            <div className='flex flex-col w-full'>
              <label className='text-left font-medium text-gray-500 mb-2'>Describe your product:</label>
              <textarea onChange={handleInputChange} name='description' className='w-4/4 h-20 rounded-md border-2 resize-none py-2 px-3' />
            </div>
            <div className='w-full h-14'>
              <button type='submit' className='bg-slate-900 hover:bg-slate-700 text-white rounded-full h-full w-full my-5'>Publish product</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
