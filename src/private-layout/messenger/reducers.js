import { combineReducers } from 'redux';

// local dependencies
import layout from './layout/reducer';
import chain from './chain/reducer';

export default combineReducers({
    layout,
    chain,
});
