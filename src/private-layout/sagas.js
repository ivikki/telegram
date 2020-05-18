// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import messenger from './messenger/saga';

export default function * () {
    yield fork(messenger);
}
