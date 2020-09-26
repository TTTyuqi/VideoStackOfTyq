import axios, { AxiosInstance } from 'axios'

//创建axios实例
const instance:AxiosInstance= axios.create({
    baseURL:'http://localhost:3000',
    timeout:3000
})

instance.interceptors.request.use((config) => {
    return config
},(error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
})

instance.interceptors.response.use((response) => {
    // 对响应数据做点什么
    return response.data;
},(error) => {
     // 对响应错误做点什么
    return Promise.reject(error)
})

export default instance
