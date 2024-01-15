
import { APIInstance } from './apiInstance';

export const instance = new APIInstance({
    baseURL: '/bus/showAll'
});

const api = instance.api;

export const showAllBus = (payload) => {
    return api.get(api.baseURL);
};