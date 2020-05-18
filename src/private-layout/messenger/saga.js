// outsource dependencies
import { put, call, delay, takeEvery } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';

function * initializeSaga () {
    // console.log('%c SIGN_IN initialize ', 'color: #FF6766; font-weight: bolder; font-size: 12px;');
}


//connect page sagas
export default function * () {
    yield takeEvery(TYPE.UPDATE_DATA, signInSaga);
}