import Actions from 'actions';
import TabThreeNavigator from '../../components/tabThree/TabThreeNavigator';

function tabThree(state, action) {
  if (action.type === Actions.GO_BACK_FROM_TAB) {
    if (action.tab === 'TabThree') {
      const newAction = {
        type: Actions.BACK,
        key: action.key,
      };
      return TabThreeNavigator.router.getStateForAction(newAction, state);
    }
  } else if (action.type === Actions.GO_TO_FROM_TAB) {
    if (action.tab === 'TabThree') {
      const currentIndex = state.index;
      const currentRouteName = state.routes[currentIndex].routeName;
      if (action.routeName !== currentRouteName) {
        const newAction = {
          type: Actions.NAVIGATE,
          routeName: action.routeName,
          params: action.params,
        };
        return TabThreeNavigator.router.getStateForAction(newAction, state);
      }
      return state;
    }
  }
  return TabThreeNavigator.router.getStateForAction(action, state);
}

export default tabThree;
