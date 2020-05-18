import { fork } from 'redux-saga/effects';
import privateSaga from './private-layout/sagas';
import publicSaga from './public-layout/sagas';

function * rootSaga () {
    yield fork(privateSaga);
    yield fork(publicSaga);
}

export default rootSaga;
