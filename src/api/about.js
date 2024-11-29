import { qinHttp } from '../utils/request'

// 使用第二个 API
export const getMessage = () => {
  return qinHttp.get('/message')
}

export const updateMessage = (message) => {
  return qinHttp.post('/message/update', { message })
} 