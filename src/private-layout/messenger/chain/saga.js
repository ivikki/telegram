// outsource dependencies
import { takeEvery, call, put, select } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { selector } from './reducer';
import { getChain, saveMessage } from '../../../services/api.service';

function * initializeSaga ({ id }) {
    const chain = yield call(getChain, id);

    yield put({ type: TYPE.META, initialized: true, chain, chainId: id });
}

function * saveMessageSaga ({ message }) {
    const { chainId } = yield select(selector);
    const chain = yield call(saveMessage, message, chainId);

    yield put({ type: TYPE.META, chain });
}

//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
    yield takeEvery(TYPE.CREATE_MESSAGE, saveMessageSaga);
}
