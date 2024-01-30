
import { APIInstance } from './apiInstance';

export const instance = new APIInstance({
    baseURL: 'bus/showAll'
});
export const postInstance = new APIInstance({
    baseURL: 'bus/add'
});
export const deleteInstance =new APIInstance({
    baseURL:'bus/delete'
})

const api = instance.api;
const postApi = postInstance.api
const deleteApi = deleteInstance.api

export const showAllBus = (payload) => {
    console.log("showallbus");
    return api.get(api.baseURL)
};
export const addBus = (payload) => {
    return postApi.post(api.baseURL,payload)
}
export const deleteBus = (payload) => {
    console.log("payload",payload)
    return deleteApi.delete(deleteApi.baseURL, { data: payload })
}
