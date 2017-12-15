import { all, fork } from 'redux-saga/effects';
import rehydrate from './rehydrate';

export default function* auth() {
  yield all([
    fork(rehydrate),
  ]);
}
