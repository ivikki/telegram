// outsource dependencies
import axios from 'axios';

// local dependencies
import { saveUser, getChainsMock, saveChains } from './mock.service';
import { Message } from './chain.mock';

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
    const data = { country: country.label, phone: country.value+phone };
    return new Promise(resolve => {
        // Save in sessionStorage
        const user = saveUser(data);

        setTimeout(() => resolve(user), 300);
    });
}

export function getChains (search) {
    const allChains = getChainsMock();
    let chains;
    if (search) {
        chains = allChains.filter(chain => chain.userName.toLowerCase().startsWith(search.toLowerCase()));
    } else {
        chains = allChains;
    }

    return new Promise(resolve => {
        setTimeout(() => resolve(chains), 300);
    });
}

export function getChain (chainId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const chains = getChainsMock();
            const chain = chains.find(chain => +chain.id === +chainId);
            if (chain) {
                resolve(chain);
            } else {
                reject({ message: 'Chain not found' });
            }
        }, 200);
    });
}

export function saveMessage (message, chainId) {
    const chains = getChainsMock();
    const chain = chains.find(chain => +chain.id === +chainId);
    chain.messages.push(new Message({ id: 1, userName: 'Vika' }, message));

    const newChains = chains.map(el => (el.id === chain.id ? chain : el));
    saveChains(newChains);

    return new Promise(resolve => {
        setTimeout(() => resolve(chain), 300);
    });
}
