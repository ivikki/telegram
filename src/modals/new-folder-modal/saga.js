// outsource dependencies
import { takeEvery, put, call } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { getUserList } from '../../services/mock.service';
import { saveFolder } from '../../services/api.service';

function * initializeSaga () {
    const userList = yield call(getUserList);

    yield put({ type: TYPE.META, userList, initialized: true });
}

function * saveFolderSaga ({ nameFolder, usersFolder }) {
    yield call(saveFolder, nameFolder, usersFolder);
}

//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
    yield takeEvery(TYPE.SAVE_FOLDER, saveFolderSaga);
}
