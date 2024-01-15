
import { APIInstance } from './apiInstance';

export const instance = new APIInstance({
    baseURL: '/login'
});

const api = instance.api;

export const login = (payload) => {
    console.log('paryload here',api);
    return api.post(null, { ...payload });
};