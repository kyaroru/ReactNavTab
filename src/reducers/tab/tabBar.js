import Actions from 'actions';
import TabBarNavigator from '../../components/tabBar/TabBarNavigator';

function tabBar(state, action) {
  if (action.type === Actions.JUMP_TO_TAB) {
    return { ...state, index: action.index };
  }
  return TabBarNavigator.router.getStateForAction(action, state);
}

export default tabBar;
