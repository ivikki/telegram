// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import appSaga from './app/saga';
import modalsSaga from './modals/sagas';
import publicSaga from './public-layout/sagas';
import privateSaga from './private-layout/sagas';

/**
 * Connect all application sagas "rootSaga"
 */
function * rootSaga () {
    yield fork(privateSaga);
    yield fork(publicSaga);
    yield fork(modalsSaga);
    yield fork(appSaga);
}

export default rootSaga;

