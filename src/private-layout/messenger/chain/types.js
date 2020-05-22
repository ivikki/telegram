export default (prefix => ({
    PREFIX: new RegExp(prefix, 'i'),
    // simple action
    META: `${prefix}META`,
    CLEAR: `${prefix}CLEAR`,
    // Complex actions
    UPDATE_DATA: `${prefix}UPDATE_DATA`,
    INITIALIZE: `${prefix}INITIALIZE`,
    CREATE_MESSAGE: `${prefix}CREATE_MESSAGE`,

}))('@messenger/chain/');

