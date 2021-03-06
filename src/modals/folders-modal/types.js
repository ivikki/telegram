export default (prefix => ({
    PREFIX: new RegExp(prefix, 'i'),
    // simple action
    META: `${prefix}META`,
    CLEAR: `${prefix}CLEAR`,
    // Complex actions
    UPDATE_DATA: `${prefix}UPDATE_DATA`,
    DELETE_FOLDER: `${prefix}DELETE_FOLDER`,
    INITIALIZE: `${prefix}INITIALIZE`
}))('@folders-modal/');
