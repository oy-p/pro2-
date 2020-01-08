import axios from 'axios'

const request = axios.create({
  // baseURL: 'http://rap2api.taobao.org/app/mock/242069',
  timeout: 5000
})

request.interceptors.request.use( config => {
  return config
} )

request.interceptors.response.use( res => {
  console.log(res.data);
  
    if (res.data.code === 200) {
      return res.data.data
    } else {

    }
})

export default request