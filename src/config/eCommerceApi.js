import axios from 'axios'

export const VITE_API_URL = 'https://backendnodejstzuzulcode.uw.r.appspot.com/api'

export const eCommerceApi = axios.create({
  baseURL: VITE_API_URL
})

export const get = async (url) => {
  try {
    const result = await eCommerceApi.get(url, {
      withCredentials: true
    })

    return result.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const post = async (url, data) => {
  try {
    const result = await eCommerceApi.post(url, data, {
      withCredentials: true
    })
    return result.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const put = async (url, data) => {
  try {
    const result = await eCommerceApi.put(url, data, {
      withCredentials: true
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}
