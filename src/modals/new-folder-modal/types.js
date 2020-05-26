export default (prefix => ({
    PREFIX: new RegExp(prefix, 'i'),
    // simple action
    META: `${prefix}META`,
    CLEAR: `${prefix}CLEAR`,
    // Complex actions
    UPDATE_DATA: `${prefix}UPDATE_DATA`,
    SAVE_FOLDER: `${prefix}SAVE_FOLDER`,
    INITIALIZE: `${prefix}INITIALIZE`
}))('@new-folder-modal/');
