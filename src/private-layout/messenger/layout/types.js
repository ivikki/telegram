export default (prefix => ({
    PREFIX: new RegExp(prefix, 'i'),
    // simple action
    META: `${prefix}META`,
    CLEAR: `${prefix}CLEAR`,
    // Complex actions
    UPDATE_DATA: `${prefix}UPDATE_DATA`,
    UPDATE_FOLDER: `${prefix}UPDATE_FOLDER`,
    GET_FOLDERS: `${prefix}GET_FOLDERS`,
    INITIALIZE: `${prefix}INITIALIZE`
}))('@messenger/');

