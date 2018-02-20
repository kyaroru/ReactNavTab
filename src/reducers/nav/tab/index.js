import { combineReducers } from 'redux';
import TabOneNavigator from 'navigator/tabBar/tabOne/TabOneNavigator';
import TabTwoNavigator from 'navigator/tabBar/tabTwo/TabTwoNavigator';
import TabThreeNavigator from 'navigator/tabBar/tabThree/TabThreeNavigator';
import Actions from 'actions';
import bar from './bar';

const navigators = [
  TabOneNavigator,
  TabTwoNavigator,
  TabThreeNavigator,
];

const tabReducer = tabIndex => (state, action) => {
  const MyNavigator = navigators[tabIndex];
  if (action.type === Actions.GO_BACK_FROM_TAB) {
    if (action.index === tabIndex) {
      const newAction = {
        type: Actions.BACK,
        key: action.key,
      };
      return MyNavigator.router.getStateForAction(newAction, state);
    }
  } else if (action.type === Actions.GO_TO_FROM_TAB) {
    if (action.index === tabIndex) {
      const currentIndex = state.index;
      const currentRouteName = state.routes[currentIndex].routeName;
      if (action.routeName !== currentRouteName) {
        const newAction = {
          type: Actions.NAVIGATE,
          routeName: action.routeName,
          params: action.params,
        };
        return MyNavigator.router.getStateForAction(newAction, state);
      }
      return state;
    }
  } else if (action.type === Actions.RESET_TAB) {
    if (action.index === tabIndex) {
      const routes = [
        state.routes[0],
      ];
      return { routes, index: 0 };
    }
  }
  return MyNavigator.router.getStateForAction(action, state);
};

export default combineReducers({
  bar,
  one: tabReducer(0),
  two: tabReducer(1),
  three: tabReducer(2),
});
