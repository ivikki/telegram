import { combineReducers } from 'redux';

// local dependencies
import chain from './chain/reducer';
import layout from './layout/reducer';
import newMessage from './new-message/reducer';

export default combineReducers({
    layout,
    chain,
    newMessage
});
