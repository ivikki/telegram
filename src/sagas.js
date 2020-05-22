// outsource dependencies
import { fork, takeEvery, call, put } from 'redux-saga/effects';

// local dependencies
import { historyPush } from './store';
import { APP_TYPES } from './reducers';
import * as ROUTES from './constants/routes';
import publicSaga from './public-layout/sagas';
import { getUser } from './services/mock.service';
import privateSaga from './private-layout/sagas';

/**
 * Connect all application sagas "rootSaga"
 */
function * rootSaga () {
    yield fork(privateSaga);
    yield fork(publicSaga);
    yield fork(appSaga);
}

export default rootSaga;


/**
 * application data sagas
 */
function * appSaga () {
    yield takeEvery(APP_TYPES.INITIALIZE, appInitializeSaga);
    yield takeEvery(APP_TYPES.SAVE_USER, appSaveUserSaga);
}

function * appInitializeSaga () {
    const user = yield call(getUser);
    if (!user) {
        yield call(historyPush, ROUTES.SIGN_IN.LINK());
    }

    yield put({ type: APP_TYPES.META, user });
}

export function * appSaveUserSaga (user) {
    yield put({ type: APP_TYPES.META, user });
}
