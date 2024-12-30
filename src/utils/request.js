import axios from 'axios'

// 创建 Axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api', // 使用环境变量中的基础 URL
  timeout: 15000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在请求发送之前做些什么
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // 添加 token
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error('请求错误：', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    if (response.status === 200) {
      return response.data; // 返回数据
    }
    return Promise.reject(new Error('请求失败'));
  },
  (error) => {
    // 对响应错误做点什么
    console.error('响应错误：', error);
    return Promise.reject(error);
  }
);

// 封装请求方法
const request = {
  get(url, params) {
    return service.get(url, { params });
  },
  post(url, data) {
    return service.post(url, data);
  },
  put(url, data) {
    return service.put(url, data);
  },
  delete(url, params) {
    return service.delete(url, { params });
  },
};

export default request; 