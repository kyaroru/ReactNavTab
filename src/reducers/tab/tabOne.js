import Actions from 'actions';
import TabOneNavigator from '../../components/tabOne/TabOneNavigator';

function tabOne(state, action) {
  if (action.type === Actions.GO_BACK_FROM_TAB) {
    if (action.tab === 'TabOne') {
      const newAction = {
        type: Actions.BACK,
        key: action.key,
      };
      return TabOneNavigator.router.getStateForAction(newAction, state);
    }
  } else if (action.type === Actions.GO_TO_FROM_TAB) {
    if (action.tab === 'TabOne') {
      const currentIndex = state.index;
      const currentRouteName = state.routes[currentIndex].routeName;
      if (action.routeName !== currentRouteName) {
        const newAction = {
          type: Actions.NAVIGATE,
          routeName: action.routeName,
          params: action.params,
        };
        return TabOneNavigator.router.getStateForAction(newAction, state);
      }
      return state;
    }
  }
  return TabOneNavigator.router.getStateForAction(action, state);
}

export default tabOne;
