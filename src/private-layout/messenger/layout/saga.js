// outsource dependencies
import { takeEvery, call, put } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { getChains } from '../../../services/api.service';

function * initializeSaga () {
    yield call(updateDataSaga, {});
}

function * updateDataSaga ({ search }) {
    const chains = yield call(getChains, search);

    yield put({ type: TYPE.META, chains });
}

//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
    yield takeEvery(TYPE.UPDATE_DATA, updateDataSaga);
}
