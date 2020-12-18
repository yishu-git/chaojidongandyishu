import axios from 'axios'

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const instance = axios.create({
  // timeout: 5000,
  baseURL: 'https://www.fastmock.site/mock/353b3ff6ec4bb5e23761589b516b7615/api'
});

instance.interceptors.request.use(function (config) {
  return config
}, (err) => Promise.reject(err))
instance.interceptors.response.use((response) => {
  return response
}, (err) => Promise.reject(err))

export const myget = (url, data = {}) => {
  return instance.get(url,  {params:data} )
}
export const mypost = (url, data = {}) => {
  return instance.post(url, data)
}
