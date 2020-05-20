// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import layout from './layout/saga';
import chain from './chain/saga';

export default function * () {
    yield fork(layout);
    yield fork(chain);
}
