// outsource dependencies
import axios from 'axios';

// local dependencies
import { saveUser, getChainsMock } from './mock.service';

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
        const user = saveUser({ country, phone });

        setTimeout(() => resolve(user), 300);
    });
}

export function getChains (search) {
    return new Promise(resolve => {
        setTimeout(() => resolve(getChainsMock()), 300);
    });
}

export function getChain (chainId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const chain = getChainsMock().find(chain => chain.id == chainId);
            if (chain) {
                resolve(chain);
            } else {
                reject({ message: 'Chain not found' });
            }
        }, 200);
    });
}
