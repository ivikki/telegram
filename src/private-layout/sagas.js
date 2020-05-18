// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import plan from './plan/saga';
import guests from './guests/sagas';
import settings from './settings/sagas';
import modals from './modals/sagas';

export default function * () {
    yield fork(plan);
    yield fork(guests);
    yield fork(settings);
    yield fork(modals);
}
