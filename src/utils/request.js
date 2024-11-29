import axios from 'axios'
import { useRouter } from 'vue-router'

// 创建请求实例的工厂函数
const createAxiosInstance = (baseURL) => {
  const instance = axios.create({
    baseURL: import.meta.env[baseURL],
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // 请求拦截器
  instance.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    },
    error => {
      console.error('请求错误：', error)
      return Promise.reject(error)
    }
  )

  // 响应拦截器
  instance.interceptors.response.use(
    response => {
      const res = response.data
      if (res.code === 200) {
        return res.data
      }
      handleErrorStatus(res.code, res.message)
      return Promise.reject(new Error(res.message || '请求失败'))
    },
    error => {
      console.error('响应错误：', error)
      const { status } = error.response || {}
      handleErrorStatus(status, error.message)
      return Promise.reject(error)
    }
  )

  return instance
}

// 错误状态处理
function handleErrorStatus(status, message) {
  const router = useRouter()
  switch (status) {
    case 401:
      localStorage.removeItem('token')
      router.push('/login')
      break
    case 403:
      router.push('/403')
      break
    default:
      console.error(message)
  }
}

// 创建不同的请求实例，使用环境变量名称
const mainRequest = createAxiosInstance('VITE_API_URL')
const qinRequest = createAxiosInstance('VITE_QIN_API_URL')
const otherRequest = createAxiosInstance('VITE_OTHER_API_URL')

// 导出请求方法
export const mainHttp = {
  get: (url, params) => mainRequest.get(url, { params }),
  post: (url, data) => mainRequest.post(url, data),
  put: (url, data) => mainRequest.put(url, data),
  delete: (url, params) => mainRequest.delete(url, { params })
}

export const qinHttp = {
  get: (url, params) => qinRequest.get(url, { params }),
  post: (url, data) => qinRequest.post(url, data),
  put: (url, data) => qinRequest.put(url, data),
  delete: (url, params) => qinRequest.delete(url, { params })
}

export const otherHttp = {
  get: (url, params) => otherRequest.get(url, { params }),
  post: (url, data) => otherRequest.post(url, data),
  put: (url, data) => otherRequest.put(url, data),
  delete: (url, params) => otherRequest.delete(url, { params })
} 