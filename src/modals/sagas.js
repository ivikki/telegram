import { fork } from 'redux-saga/effects';

import settingsSaga from './settings-modal/saga';

export default function * () {
    yield fork(settingsSaga);
}
