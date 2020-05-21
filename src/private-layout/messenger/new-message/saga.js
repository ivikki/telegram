// outsource dependencies
import { takeEvery, call } from 'redux-saga/effects';

// local dependencies
import TYPE from './types';
import { saveMessage } from '../../../services/api.service';

// function * initializeSaga () {
//     // yield call(updateDataSaga, {});
// }

function * updateDataSaga (data) {
    const { message } = data;
    console.log(message);
    yield call(saveMessage, message);
    // console.log(chain);
}

//connect page sagas
export default function * () {
    // yield takeEvery(TYPE.INITIALIZE, initializeSaga);
    yield takeEvery(TYPE.UPDATE_DATA, updateDataSaga);
}
