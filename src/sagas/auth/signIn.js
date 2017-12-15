import { takeLatest, all, fork, put } from 'redux-saga/effects';
import Actions from 'actions';

function* signIn({ credentials }) {
  console.log('sign in');
  yield put(Actions.signInSuccess('fake-token'));
}

function* watchSignIn() {
  yield takeLatest(Actions.SIGN_IN, signIn);
}

export default function* auth() {
  yield all([
    fork(watchSignIn),
  ]);
}
