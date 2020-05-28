import { chains, Message, folders, Folder } from './chain.mock';

export function getUser () {
    const json = sessionStorage.getItem('user');

    if (json) {
        return JSON.parse(json);
    }

    return null;
}

export function saveUser (userData) {
    let user = sessionStorage.getItem('user');

    user = user ? JSON.parse(user) : {};
    user = { ...user, ...userData, id: 1, userName: 'Vika', url: 'https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png' };

    sessionStorage.setItem('user', JSON.stringify(user));

    return user;
}

export function getChainsMock () {
    let myChains = localStorage.getItem('chains');
    myChains = myChains ? JSON.parse(myChains) : chains;

    return myChains;
}

export function saveChains (chains) {
    localStorage.setItem('chains', JSON.stringify(chains));
    localStorage.setItem('lastMessageId', Message.counter);
}

export function saveFolders (folders) {
    localStorage.setItem('folders', JSON.stringify(folders));
    localStorage.setItem('lastFolderId', Folder.counter);
}

export function getFoldersMock () {
    let myFolders = localStorage.getItem('folders');
    myFolders = myFolders ? JSON.parse(myFolders) : folders;

    return myFolders;
}
