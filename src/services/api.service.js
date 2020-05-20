// outsource dependencies
import axios from 'axios';

// local dependencies
import { chains } from './chain.mock';
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
        saveUser({ country, phone });

        setTimeout(() => resolve(), 300);
    });
}

export function getChains () {
    return getChainsMock();
    // return new Promise(resolve => {
    //     setTimeout(() => resolve(getChainsMock()), 300);
    // });
}

export function getMessages (chainId) {
    return chains.find(chain => chain.id === chainId);


    // return new Promise(resolve => {
    //     const chain = chains.find(chain => chain.id === chainId);
    //
    //     setTimeout(() => resolve(chain.messages), 200);
    // });
}
