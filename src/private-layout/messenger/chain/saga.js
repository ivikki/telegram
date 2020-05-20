// outsource dependencies
import { takeEvery, call, put } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { getChain } from '../../../services/api.service';

function * initializeSaga ({ id }) {
    const chain = yield call(getChain, id);

    yield put({ type: TYPE.META, initialized: true, chain });
}


//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
}
