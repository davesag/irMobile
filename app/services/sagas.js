import { fork } from 'redux-saga/effects'

import irSaga from './ir/saga'

export default function* root() {
  yield fork(irSaga().watcher)
}
