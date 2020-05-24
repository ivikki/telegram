// outsource dependencies

// local dependencies
import TYPE from './types';

const initial = {
    initialized: false,
    expectAnswer: false,
    errorMessage: null,
    isOpen: false
};

export default function (state = initial, action) {
    const { type, ...options } = action;
    switch (type) {
        default:
            break;
        case TYPE.CLEAR:
            state = { ...state, ...initial };
            break;
        case TYPE.META:
            state = { ...state, ...options };
            break;
    }
    return state;
}

export const selector = state => state.modals.settings;
