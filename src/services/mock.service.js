import { chains } from './chain.mock';

export function saveUser (userData) {
    let user = sessionStorage.getItem('user');
    user = user ? JSON.parse(user) : {};

    user = { ...user, ...userData, id: 1, userName: 'Vika' };

    sessionStorage.setItem('user', JSON.stringify(user));

    return user;
}

export function getChainsMock () {
    return chains;
}
