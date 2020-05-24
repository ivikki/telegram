// outsource dependencies
import { takeEvery, put } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';

function * initializeSaga () {
    yield put({ type: TYPE.META, initialized: true });
}

//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
}
