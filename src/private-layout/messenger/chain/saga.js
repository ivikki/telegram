// outsource dependencies
import { takeEvery, call, put, select } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { selector } from './reducer';
import { getChain, saveMessage } from '../../../services/api.service';

function * initializeSaga ({ id }) {
    const chain = yield call(getChain, id);

    yield put({ type: TYPE.META, initialized: true, chain });
}

function * saveMessageSaga ({ message }) {
    const { chain } = yield select(selector);
    const res = yield call(saveMessage, message, chain.id);

    yield put({ type: TYPE.META, chain: res });
}

//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
    yield takeEvery(TYPE.CREATE_MESSAGE, saveMessageSaga);
}
