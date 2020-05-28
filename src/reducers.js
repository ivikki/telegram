// outsource dependencies
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';

// local dependencies
import app from './app/reducer';
import modals from './modals/reducers';
import publicLayout from './public-layout/reducers';
import privateLayout from './private-layout/reducers';

/**
 * Connect all application reducers to "rootReducer"
 */

const createRootReducer = history =>
    combineReducers({
        app,
        form,
        modals,
        router: connectRouter(history),
        // pages
        ...publicLayout,
        ...privateLayout,
    });

// export
export default createRootReducer;
