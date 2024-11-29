import { mainHttp } from '../utils/request'

// 首页相关接口
export const getCounter = () => {
  return mainHttp.get('/counter')
}

export const incrementCounter = () => {
  return mainHttp.post('/counter/increment')
}

export const getHomeData = () => {
  return mainHttp.get('/home/data')
} 