import { combineReducers } from 'redux';

// local dependencies
import chain from './chain/reducer';
import layout from './layout/reducer';

export default combineReducers({
    layout,
    chain,
});
