// outsource dependencies
import { takeEvery, call, put } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { history } from '../../store';
import { MESSENGER } from '../../constants/routes';
import { instanceAPI, signIn } from '../../services/api.service';

function * initializeSaga () {
    const rawCountries = yield call(instanceAPI, {
        method: 'GET',
        url: '/countries.json'
    });

    const countries = rawCountries.map(el => ({ label: el.name, value: el.dial_code }));
    yield put({ type: TYPE.META, countries });
}

function * updateDataSaga (data) {
    try {
        yield call(signIn, data);
        yield call(history.push, MESSENGER.LINK());

    } catch ({ message }) {
        console.log(message);
    }
}

//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
    yield takeEvery(TYPE.UPDATE_DATA, updateDataSaga);
}
