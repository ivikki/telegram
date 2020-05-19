// outsource dependencies
import { takeEvery, call, put } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { getChains } from '../mock';

function * initializeSaga () {
    const chains = yield call(getChains);
    console.log(chains);

    yield put({ type: TYPE.META, chains });
}


//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
}
