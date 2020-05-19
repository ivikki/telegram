// outsource dependencies
import { takeEvery, call, put } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { getMessages } from '../mock';

function * initializeSaga () {
    const messages = yield call(getMessages);
    console.log(messages);

    yield put({ type: TYPE.META, messages });
}


//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
}
