export default (prefix => ({
    PREFIX: new RegExp(prefix, 'i'),
    // simple action
    META: `${prefix}META`,
    CLEAR: `${prefix}CLEAR`,
    // Complex actions
    UPDATE_DATA: `${prefix}UPDATE_DATA`,
    UPDATE_CHAINS: `${prefix}UPDATE_CHAINS`,
    UPDATE_FOLDER: `${prefix}UPDATE_FOLDER`,
    INITIALIZE: `${prefix}INITIALIZE`
}))('@messenger/');

