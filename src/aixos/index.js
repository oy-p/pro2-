import axios from 'axios'
import { message } from 'antd'

const isDev = process.env.NODE_ENV === 'development'

const request = axios.create({
    baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/241747' : '',
    timeout: 5000
})

request.interceptors.request.use( config => {
    //一般在这加token
    console.log(config)
    return config
})

request.interceptors.response.use( resp => {
    console.log(resp);
    
    if (resp.data.code === 200) {

        return resp.data.data
    } else {
        //全局处理,全局弹窗
        message.error(1)
    }
})

export default request
