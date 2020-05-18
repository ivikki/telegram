import { fork } from 'redux-saga/effects';
import privateSaga from './private-layout/sagas';
import publicSaga from './public-layout/sagas';

/**
 * rootSaga
 * @param {Object} store
 */
function * rootSaga (store) {
    yield fork(privateSaga, store);
    yield fork(publicSaga, store);
}

export default rootSaga;
