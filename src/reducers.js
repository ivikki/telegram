// outsource dependencies
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';

// local dependencies
import publicLayout from './public-layout/reducers';
import privateLayout from './private-layout/reducers';

const createRootReducer = history =>
    combineReducers({
        form,
        router: connectRouter(history),
        // pages
        ...publicLayout,
        ...privateLayout
    });

// export
export default createRootReducer;
