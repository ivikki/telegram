// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import messenger from './messenger/sagas';

export default function * () {
    yield fork(messenger);
}
