
import { APIInstance } from './apiInstance';

export const instance = new APIInstance({
    baseURL: 'busOperator/showAll'
});
export const postInstance = new APIInstance({
    baseURL: 'busOperator/add'
});

const api = instance.api;
const postApi = postInstance.api

export const showAllBusOperator = () => {
    console.log("busoperatorAPI model")
    return api.get(api.baseURL)
};
export const addBusOperator = (payload) =>{
    return postApi.post(postApi.baseURL,payload)
}

