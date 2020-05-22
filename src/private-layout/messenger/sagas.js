// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import chain from './chain/saga';
import layout from './layout/saga';

export default function * () {
    yield fork(layout);
    yield fork(chain);
}
