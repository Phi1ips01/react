
import { APIInstance } from './apiInstance';

export const instance = new APIInstance({
    baseURL: 'busOperator/showAll'
});
export const postInstance = new APIInstance({
    baseURL: 'busOperator/add'
});
export const deleteInstance =new APIInstance({
    baseURL:'busOperator/delete'
})

const api = instance.api;
const postApi = postInstance.api
const deleteApi = deleteInstance.api

export const showAllBusOperator = () => {
    console.log("busoperatorAPI model")
    return api.get(api.baseURL)
};
export const addBusOperator = (payload) =>{
    return postApi.post(postApi.baseURL,payload)
}

export const deleteBusOperator = (payload) => {
    console.log("payload",payload)
    return deleteApi.delete(deleteApi.baseURL, { data: payload })
}