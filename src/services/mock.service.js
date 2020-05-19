import { chains } from './chain.mock';

export function saveUser (userData) {
    let user = sessionStorage.getItem('user');
    user = user ? JSON.parse(user) : {};

    user = { ...user, ...userData };

    sessionStorage.setItem('user', JSON.stringify(user));
}

export function getChainsMock () {
    return chains;
}

export function createChain (chain) {

}
