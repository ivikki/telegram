// outsource dependencies
import signInSaga from './sign-in/saga';
import { fork } from 'redux-saga/effects';


//connect all child sagas

export default function * () {
    yield fork(signInSaga);
}
