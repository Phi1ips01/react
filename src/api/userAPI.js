
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
export const updateInstance = new APIInstance({
    baseURL: 'user/update'
})

const api = instance.api;
const postApi = postInstance.api
const deleteApi = deleteInstance.api
const updateApi = updateInstance.api
export const showAllUser = (payload) => {
    return api.get(api.baseURL)
};
export const addUser = (payload) =>{
    console.log("payload",payload)
    return postApi.post(postApi.baseURL,payload)
}
export const deleteUser = (payload) => {
    console.log("payload",payload)
    return deleteApi.delete(deleteApi.baseURL, { data: payload })
}
export const updateUser = (payload)=>{
    return updateApi.put(updateApi.baseURL,{data:payload})
}