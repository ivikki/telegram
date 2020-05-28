// outsource dependencies
import { takeEvery, put, call } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { saveFolder, getChains } from '../../services/api.service';
import { getFoldersSaga } from '../../private-layout/messenger/layout/saga';

function * initializeSaga () {
    const chains = yield call(getChains);

    yield put({ type: TYPE.META, chains, initialized: true });
}

function * saveFolderSaga ({ nameFolder, usersFolder }) {
    if (usersFolder && nameFolder) {
        yield call(saveFolder, nameFolder, usersFolder);
        yield call(getFoldersSaga);
    }
}

//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
    yield takeEvery(TYPE.SAVE_FOLDER, saveFolderSaga);
}
