// outsource dependencies
import { takeEvery, call, put } from 'redux-saga/effects';

// local dependencies
import { APP_TYPES } from './types';
import { getMe } from '../services/api.service';

function * appInitializeSaga () {
    const user = yield call(getMe);
    if (user) {
        yield put({ type: APP_TYPES.META, user });
    }

    yield put({ type: APP_TYPES.META, initialized: true });
}

export function * appSaveUserSaga (user) {
    yield put({ type: APP_TYPES.META, user });
}

export default function * appSaga () {
    yield takeEvery(APP_TYPES.INITIALIZE, appInitializeSaga);
}
