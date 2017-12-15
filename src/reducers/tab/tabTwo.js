import Actions from 'actions';
import TabTwoNavigator from '../../components/tabTwo/TabTwoNavigator';

function tabTwo(state, action) {
  if (action.type === Actions.GO_BACK_FROM_TAB) {
    if (action.tab === 'TabTwo') {
      const newAction = {
        type: Actions.BACK,
        key: action.key,
      };
      return TabTwoNavigator.router.getStateForAction(newAction, state);
    }
  } else if (action.type === Actions.GO_TO_FROM_TAB) {
    if (action.tab === 'TabTwo') {
      const currentIndex = state.index;
      const currentRouteName = state.routes[currentIndex].routeName;
      if (action.routeName !== currentRouteName) {
        const newAction = {
          type: Actions.NAVIGATE,
          routeName: action.routeName,
          params: action.params,
        };
        return TabTwoNavigator.router.getStateForAction(newAction, state);
      }
      return state;
    }
  }
  return TabTwoNavigator.router.getStateForAction(action, state);
}

export default tabTwo;
