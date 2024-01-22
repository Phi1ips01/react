
import { APIInstance } from './apiInstance';

export const instance = new APIInstance({
    baseURL: 'user/showAll'
});
export const postInstance = new APIInstance({
    baseURL: 'user/add'
});

const api = instance.api;
const postApi = postInstance.api

export const showAllUser = (payload) => {
    return api.get(api.baseURL)
};
export const addUser = (payload) =>{
    return postApi.post(postApi.baseURL,payload)
}
