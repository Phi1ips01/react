
import { APIInstance } from './apiInstance';

export const instance = new APIInstance({
    baseURL: 'trip/showAll'
});
export const postInstance = new APIInstance({
    baseURL: 'trip/add'
});
export const deleteInstance =new APIInstance({
    baseURL:'trip/delete'
})

const api = instance.api;
const postApi = postInstance.api
const deleteApi = deleteInstance.api
export const showAllTrip = (payload) => {
    return api.get(api.baseURL)
};
export const addTrip = (payload) =>{
    return postApi.post(postApi.baseURL,payload)
}
export const deleteTrip = (payload) => {
    console.log("payload",payload)
    return deleteApi.delete(deleteApi.baseURL, { data: payload })
}
