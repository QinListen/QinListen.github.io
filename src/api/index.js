import request from '../utils/request'

// 首页相关接口
export const getCounter = () => {
  return request.get('/api/articles')
}

export const incrementCounter = () => {
  return request.post('/counter/increment')
}

export const getHomeData = () => {
  return request.get('/home/data')
} 