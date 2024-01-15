
import { APIInstance } from './apiInstance';

export const instance = new APIInstance({
    baseURL: '/trip/showAll'
});
export const postInstance = new APIInstance({
    baseURL: '/trip/add'
});

const api = instance.api;
const postApi = postInstance.api

export const showAllTrip = (payload) => {
    return api.get(api.baseURL);
};
export const addTrip = (payload) =>{
    return postApi.post(postApi.baseURL,payload)
}

