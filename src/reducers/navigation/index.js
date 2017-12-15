import Actions from 'actions';
import AppNavigator from '../../components/navigator/AppNavigator';

function navigation(state, action) {
  if (action.type === Actions.SIGN_OUT) {
    // just reset index to 0 if sign out, so it will default to Login screen
    const newRoutes = state.routes.filter(x => x.routeName === 'SignIn');
    return { routes: newRoutes, index: 0 };
  }

  return AppNavigator.router.getStateForAction(action, state);
}

export default navigation;
