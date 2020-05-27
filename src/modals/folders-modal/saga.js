// outsource dependencies
import { takeEvery, put, call } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { deleteFolder } from '../../services/api.service';
import { getFoldersSaga, updateChainsSaga } from '../../private-layout/messenger/layout/saga';

function * initializeSaga () {
    yield put({ type: TYPE.META, initialized: true });
}

function * deleteFolderSaga ({ id }) {
    yield call(deleteFolder, id);
    yield call(getFoldersSaga);
    yield call(updateChainsSaga, {});
}

//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
    yield takeEvery(TYPE.DELETE_FOLDER, deleteFolderSaga);
}
