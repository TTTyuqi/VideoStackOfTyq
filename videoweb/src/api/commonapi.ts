import { AxiosPromise } from 'axios';
import { deleteAction, getAction, postAction, putAction } from './manageapi';

//获取datalist
export function getDataList(url:string,params:{}):AxiosPromise<any>{
    return getAction(url,params)
}

//新增data
export function createDataObj(url:string,data:{}):AxiosPromise<any>{
    return postAction(url,data)
}

//更新data
export function modifyDataObj(url:string,data:{}):AxiosPromise<any>{
    return putAction(url,data)
}

//删除data
export function deleDataObj(url:string,params?:{}):AxiosPromise<any>{
    return deleteAction(url,params)
}

//获取tabledataCloms
export function getOption(url:string,param?:{}):AxiosPromise<any>{
    return getAction(url,param)
}