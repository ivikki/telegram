export const APP_TYPES = (prefix => ({
    PREFIX: new RegExp(prefix, 'i'),
    // simple action
    META: `${prefix}META`,
    CLEAR: `${prefix}CLEAR`,
    // complex action
    INITIALIZE: `${prefix}INITIALIZE`
}))('@app/');

