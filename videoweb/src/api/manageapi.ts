import instance from '@/network/index'
import { AxiosPromise } from 'axios'

//get
export const getAction = (url:string,params?:{}):AxiosPromise<any> => {
    return instance({
        url,
        method:'get',
        params
    })
}

//post
export function postAction(url:string,data:{}):AxiosPromise<any>{
    return instance({
        url,
        method:'post',
        data,
    })
}

//put
export function putAction(url:string,data:{}):AxiosPromise<any>{
    return instance({
        url,
        method:'put',
        data
    })
}

//delete
export function deleteAction(url:string,params?:{}):AxiosPromise<any>{
    return instance({
        url,
        method:'delete',
        params
    })
}