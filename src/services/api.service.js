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

function signIn () {

}
