import { takeLatest, all, fork, put } from 'redux-saga/effects';
import Actions from 'actions';

function* rehydrate() {
  yield put(Actions.finishRehydrate());
}

function* watchRehydrate() {
  yield takeLatest('persist/REHYDRATE', rehydrate);
}

export default function* persist() {
  yield all([
    fork(watchRehydrate),
  ]);
}
