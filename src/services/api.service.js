import axios from 'axios';

const API_PATH = '/api';

export const instanceAPI = axios.create({
    baseURL: API_PATH,
    withCredentials: false,
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
    }
});

instanceAPI.interceptors.response.use(
    response => response.data,
    e => e
);

export function signIn ({ country, phone }) {
    return new Promise(resolve => {
        // Сохранение данных в sessionStorage
        sessionStorage.setItem('phone', country.value+phone);
        setTimeout(() => resolve(), 300);
    });
}
