import axios from 'axios'

const service = axios.create({
  baseURL: process.env.APP_BASE_URL,
  timeout: 5000
})
service.interceptors.request.use(
  config => config,
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status === 200) {
      return response
    } else alert(res.message)
  }, error => {
    alert(error.message)
  }
)
export default service
