
import { APIInstance } from './apiInstance';

export const instance = new APIInstance({
    baseURL: 'bus/showAll'
});
export const postInstance = new APIInstance({
    baseURL: 'bus/add'
});

const api = instance.api;
const postApi = postInstance.api

export const showAllBus = (payload) => {
    console.log("showallbus");
    return api.get(api.baseURL);
};
export const addBus = (payload) => {
    return postApi.post(api.baseURL,payload)
}
