import { all, fork } from 'redux-saga/effects';
import auth from './auth';
import tab from './tab';
import persist from './persist';

export default function* root() {
  yield all([
    fork(auth),
    fork(tab),
    fork(persist),
  ]);
}
