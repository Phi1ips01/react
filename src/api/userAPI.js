
import { APIInstance } from './apiInstance';

export const instance = new APIInstance({
    baseURL: 'user/showAll'
});
export const postInstance = new APIInstance({
    baseURL: 'user/add'
});
export const deleteInstance = new APIInstance({
    baseURL: 'user/delete'
})
const api = instance.api;
const postApi = postInstance.api
const deleteAPI = deleteInstance.api

export const showAllUser = (payload) => {
    return api.get(api.baseURL)
};
export const addUser = (payload) =>{
    return postApi.post(postApi.baseURL,payload)
}
export const deleteUser = (payload) => {
    return deleteAPI.destroy(deleteAPI.baseURL,payload)
}