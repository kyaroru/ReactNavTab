import { takeLatest, all, fork, put } from 'redux-saga/effects';
import Actions from 'actions';

function* navigate({ routeName, index }) {
  // listen to tab change & perform necessary update actions
  if (routeName === 'TabOne' || index === 0) {
    // put actions to call if change tab to TabOne
  } else if (routeName === 'TabTwo' || index === 1) {
    // put actions to call if change tab to TabTwo
  } else if (routeName === 'TabThree' || index === 2) {
    // put actions to call if change tab to TabThree
  }
}

function* watchNavigateTab() {
  yield takeLatest(Actions.NAVIGATE, navigate);
}

function* watchJumpToTab() {
  yield takeLatest(Actions.JUMP_TO_TAB, navigate);
}

export default function* persist() {
  yield all([
    fork(watchNavigateTab),
    fork(watchJumpToTab),
  ]);
}
