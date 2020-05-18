
// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import { sagas as signInSagas } from './sign-in/saga';
import { sagas as signUpSagas } from './sign-up/saga';
import { sagas as forgotPassword } from './forgot-password/saga';
import { sagas as changePassword } from './change-password/saga';
import { sagas as emailConfirmation } from './email-confirmation/saga';

/**
 * connect all child sagas
 */
export function * sagas () {
    yield fork(signInSagas);
    yield fork(signUpSagas);
    yield fork(forgotPassword);
    yield fork(changePassword);
    yield fork(emailConfirmation);
}

export default sagas;
