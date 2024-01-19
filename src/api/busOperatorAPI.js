
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
    return api.get(api.baseURL).then((response) => {
        console.log("Response:", response.data);
        return response.data; // Assuming data is within response.data
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error; // Re-throw to handle in calling code
      });
};
export const addBusOperator = (payload) =>{
    return postApi.post(postApi.baseURL,payload)
}

