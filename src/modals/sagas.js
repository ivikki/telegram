// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import infoSaga from './info-modal/saga';
import foldersSaga from './folders-modal/saga';
import settingsSaga from './settings-modal/saga';
import newFolderSaga from './new-folder-modal/saga';

export default function * () {
    yield fork(infoSaga);
    yield fork(foldersSaga);
    yield fork(settingsSaga);
    yield fork(newFolderSaga);
}
