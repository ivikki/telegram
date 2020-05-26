// outsource dependencies
import { takeEvery, call, put } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { getChains, getFolders, getFolder } from '../../../services/api.service';

function * initializeSaga () {
    yield put({ type: TYPE.CLEAR });

    yield call(updateChainsSaga, {});
    yield call(getFoldersSaga);

    yield put({ type: TYPE.META, initialized: true });
}

function * updateChainsSaga ({ search }) {
    const chains = yield call(getChains, search);

    yield put({ type: TYPE.META, chains });
}

function * updateFolderSaga ({ id }) {
    const folder = yield call(getFolder, id);

    yield put({ type: TYPE.META, chains: folder.chains, selectedFolderId: id });
}

export function * getFoldersSaga () {
    const folders = yield call(getFolders);

    yield put({ type: TYPE.META, folders });
}

//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
    yield takeEvery(TYPE.UPDATE_DATA, updateChainsSaga);
    yield takeEvery(TYPE.UPDATE_FOLDER, updateFolderSaga);
}
