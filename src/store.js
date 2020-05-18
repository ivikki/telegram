import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

// local dependencies
import rootSaga from './sagas';
import createRootReducer from './reducers';

// export history outside of components to be able dispatch navigation actions from anywhere!
export const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);

// Build the middleware to run our Saga
const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line
const enchantedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store outside of root to be able dispatch actions from anywhere!
export const store = createStore(
    createRootReducer(history),
    enchantedCompose(applyMiddleware(routerMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
