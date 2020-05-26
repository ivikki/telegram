// outsource dependencies
import axios from 'axios';

// local dependencies
import { saveUser, getChainsMock, saveChains, getUser, getFoldersMock, saveFolders } from './mock.service';
import { Folder, Message } from './chain.mock';

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

export function getFolders () {
    const folders = getFoldersMock();

    return new Promise(resolve => {
        setTimeout(() => resolve(folders), 200);
    });
}

export function getFolder (folderId) {
    const folders = getFoldersMock();
    const folder = folders.find(folder => +folder.id === folderId);

    return new Promise(resolve => {
        setTimeout(() => resolve(folder), 200);
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

    saveChains(chains);

    return new Promise(resolve => {
        setTimeout(() => resolve(chain), 300);
    });
}

export function saveFolder (name, users) {
    const folders = getFoldersMock();
    const chains = [];
    users.map(user => chains.push(user.value));

    folders.push(new Folder(name, chains));

    saveFolders(folders);

    return new Promise(resolve => {
        setTimeout(() => resolve(folders), 300);
    });
}

export function getMe () {
    return new Promise(resolve => {
        setTimeout(() => resolve(getUser()), 200);
    });
}

export function getUserInfo (id) {
    const chains = getChainsMock();
    const chain = chains.find(chain => +chain.id === +id);

    const user = {
        id,
        userName: chain.userName,
        url: chain.url
    };

    return new Promise((resolve => {
        setTimeout(() => {
            resolve(user);
        });
    }));
}

