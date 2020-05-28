// outsource dependencies
import { takeEvery, call, put } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { historyPush } from '../../store';
import { appSaveUserSaga } from '../../app/saga';
import { MESSENGER } from '../../constants/routes';
import { instanceAPI, signIn } from '../../services/api.service';

function * initializeSaga () {
    const rawCountries = yield call(instanceAPI, {
        method: 'GET',
        url: '/countries.json'
    });

    const countries = rawCountries.map(el => ({ label: el.name, value: el.dial_code }));
    yield put({ type: TYPE.META, countries, initialized: true });
}

function * updateDataSaga (data) {
    try {
        const user = yield call(signIn, data);
        yield call(appSaveUserSaga, user);
        yield put({ type: TYPE.META, user });
        yield call(historyPush, MESSENGER.LINK());
    } catch ({ message }) {
        yield put({ type: TYPE.META, errorMessage: message });
    }
}

//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
    yield takeEvery(TYPE.UPDATE_DATA, updateDataSaga);
}
