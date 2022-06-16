import { useState } from 'react'

export const useForm = () => {
  const [formValues, setFormValues] = useState({})

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  return [formValues, handleInputChange]
}
