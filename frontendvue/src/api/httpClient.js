import axios from 'axios'

const BASE_URL = 'http://localhost:8000'

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  method: 'get',
  headers: {
    'Content-Type': 'application/json'
  }
})

const authInterceptor = config => {
  // const token = getAuthToken()
  // if (token) {
  //   config.headers['Authorization'] = `Token ${token}`
  // }
  return config
}

httpClient.interceptors.request.use(authInterceptor)

// interceptor to catch errors
const errorInterceptor = error => {
  // all the error responses
  switch (error.response.status) {
    case 400:
      console.error(error.response.status, error.message)
      break

    case 401: // authentication error, logout the user
      console.error(error.response.status, error.message)
      // router.push({ name: 'login' })
      break

    case 404: // not found
      console.error(error.response.status, error.message)
      break

    default:
      console.error(error.response.status, error.message)
  }
  return Promise.reject(error)
}

// Interceptor for responses
const responseInterceptor = response => {
  return response
}

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor)

export default httpClient
