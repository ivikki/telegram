import { chains, Message, folders, Folder } from './chain.mock';

export function getUser () {
    const json = sessionStorage.getItem('user');

    if (json) {
        return JSON.parse(json);
    }

    return null;
}

export function saveUser (userData) {
    // let user = JSON.parse(sessionStorage.getItem('user') || '{}');
    let user = sessionStorage.getItem('user');

    user = user ? JSON.parse(user) : {};
    user = { ...user, ...userData, id: 1, userName: 'Vika', url: 'https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png' };

    sessionStorage.setItem('user', JSON.stringify(user));

    // sessionStorage.setItem('user', JSON.stringify({
    //     ...user,
    //     ...userData,
    //     id: 1,
    //     userName: 'Vika',
    //     url: 'https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png'
    // }));

    return user;
}

export function getChainsMock () {
    // return JSON.parse(localStorage.getItem('chains')) || chains;
    let myChains = localStorage.getItem('chains');
    myChains = myChains ? JSON.parse(localStorage.getItem('chains')) : chains;

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
