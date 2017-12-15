import { all, fork } from 'redux-saga/effects';
import tabBar from './tabBar';

export default function* voucher() {
  yield all([
    fork(tabBar),
  ]);
}
