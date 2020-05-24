// outsource dependencies
import { fork, takeEvery, call, put } from 'redux-saga/effects';

// local dependencies
import { APP_TYPES } from './reducers';
import publicSaga from './public-layout/sagas';
import privateSaga from './private-layout/sagas';
import modalsSaga from './modals/sagas';

import { getMe } from './services/api.service';

/**
 * Connect all application sagas "rootSaga"
 */
function * rootSaga () {
    yield fork(privateSaga);
    yield fork(publicSaga);
    yield fork(modalsSaga);
    yield fork(appSaga);
}

export default rootSaga;


/**
 * application data sagas
 */
function * appSaga () {
    yield takeEvery(APP_TYPES.INITIALIZE, appInitializeSaga);
}

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
