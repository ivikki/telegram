// outsource dependencies
import { takeEvery, put, call } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { getUserInfo } from '../../services/api.service';

function * initializeSaga ({ id }) {
    yield put({ type: TYPE.META, isOpen: true });
    const user = yield call(getUserInfo, id);
    yield put({ type: TYPE.META, user });
}

//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
}
