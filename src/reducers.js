// outsource dependencies
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';

// local dependencies
import modals from './modals/reducers';
import publicLayout from './public-layout/reducers';
import privateLayout from './private-layout/reducers';

// app data selector
export const selector = state => state.app;

/**
 * common application action types
 */
export const APP_TYPES = (prefix => ({
    PREFIX: new RegExp(prefix, 'i'),
    // simple action
    META: `${prefix}META`,
    CLEAR: `${prefix}CLEAR`,
    // complex action
    INITIALIZE: `${prefix}INITIALIZE`
}))('@app/');


const appInitialState = {
    initialized: false,
    expectAnswer: false,
    user: null
};

/**
 * Connect all application reducers to "rootReducer"
 */

const createRootReducer = history =>
    combineReducers({
        form,
        modals,
        router: connectRouter(history),
        app,
        // pages
        ...publicLayout,
        ...privateLayout,
    });

// app-reducer
function app (state = appInitialState, action) {
    const { type, ...options } = action;
    switch (type) {
        default:
            break;
        case APP_TYPES.CLEAR:
            state = { ...state, ...appInitialState };
            break;
        case APP_TYPES.META:
            state = { ...state, ...options };
            break;
    }
    return state;
}

// export
export default createRootReducer;
