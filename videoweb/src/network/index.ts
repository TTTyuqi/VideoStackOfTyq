import axios, { AxiosInstance } from 'axios'

(window as any).axios = axios
//创建axios实例
const instance:AxiosInstance= axios.create({
    baseURL:'http://localhost:3000',
    timeout:3000
})
//文件上传axios实例
const instance1:AxiosInstance= axios.create({
    baseURL:'http://localhost:3000',
    timeout:3000,
    headers:{
        "Content-Type":"multipart/form-data"
    }
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

export {instance,instance1} 
