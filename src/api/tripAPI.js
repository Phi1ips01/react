
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
export const updateInstance =new APIInstance({
    baseURL:'trip/update'
})


const api = instance.api;
const postApi = postInstance.api
const deleteApi = deleteInstance.api
const updateApi = updateInstance.api
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
export const updateTrip = (payload)=>{
    return updateApi.put(updateApi.baseURL,{data:payload})
}