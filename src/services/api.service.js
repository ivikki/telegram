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
            const chain = getChainsMock().find(chain => +chain.id === +chainId);
            if (chain) {
                resolve(chain);
            } else {
                reject({ message: 'Chain not found' });
            }
        }, 200);
    });
}

export function saveMessage (message, chainId) {
    // const chain = getChainsMock().find(chain => +chain.id === +chainId);
    console.log(message);
    // chain.messages.push(
    //     {
    //         id: chainId,
    //         sender: {
    //             id: 1,
    //             userName: 'Vika'
    //         },
    //         chainId: 1,
    //         text: message.text,
    //         date: new Date(),
    //     }
    // );
    return new Promise(resolve => {
        setTimeout(() => resolve(message), 300);
    });
}
