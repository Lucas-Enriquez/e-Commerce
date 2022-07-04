import { VITE_API_URL } from '../../config/eCommerceApi'
import './ui-styles.css'

export const GoogleButton = () => {
  return (
    <button type='button' className='login-with-google-btn'>
      <a href={`${VITE_API_URL}/auth/google`}>Sign in with Google</a>
    </button>
  )
}
