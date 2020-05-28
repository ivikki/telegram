// local dependencies
import { APP_TYPES } from './types';

const appInitialState = {
    initialized: false,
    expectAnswer: false,
    user: null
};

// app-reducer
export default function (state = appInitialState, action) {
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


// app data selector
export const selector = state => state.app;
