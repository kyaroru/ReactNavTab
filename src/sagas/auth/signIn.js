import { takeLatest, all, fork, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Actions from 'actions';
import { alert } from 'utils/alert';

function* signIn({ credentials }) {
  if (credentials.username === 'username' && credentials.password === 'password') {
    yield call(delay, 1000);
    yield put(Actions.signInSuccess('fake-token'));
  } else {
    yield call(alert, 'Sign In Fail', 'Please enter username & password as shown in placeholder');
    yield put(Actions.signInFail('Incorrect credentials'));
  }
}

function* watchSignIn() {
  yield takeLatest(Actions.SIGN_IN, signIn);
}

export default function* auth() {
  yield all([
    fork(watchSignIn),
  ]);
}
