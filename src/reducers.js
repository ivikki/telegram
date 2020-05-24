// outsource dependencies
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';

// local dependencies
import publicLayout from './public-layout/reducers';
import privateLayout from './private-layout/reducers';
import modals from './modals/reducers';

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
        app: (state = appInitialState, action) => {
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
        },
        // pages
        ...publicLayout,
        ...privateLayout,
    });

// export
export default createRootReducer;
