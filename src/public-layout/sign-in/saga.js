// outsource dependencies
import { takeEvery, call, put } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { instanceAPI } from '../../services/api.service';

function * initializeSaga () {
    // console.log('%c SIGN_IN initialize ', 'color: #FF6766; font-weight: bolder; font-size: 12px;');

    const rawCountries = yield call(instanceAPI, {
        method: 'GET',
        url: '/countries.json'
    });

    const countries = rawCountries.map(el => ({ label: el.name, value: el.dial_code }));
    yield put({ type: TYPE.META, countries });
}

function * updateDataSaga (action) {
    //console.log('updateDataSaga', action);
}

//connect page sagas
export default function * () {
    yield takeEvery(TYPE.INITIALIZE, initializeSaga);
    yield takeEvery(TYPE.UPDATE_DATA, updateDataSaga);
}
