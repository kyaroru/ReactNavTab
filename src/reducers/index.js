import { combineReducers } from 'redux';
import auth from './auth';
import common from './common';
import persist from './persist';
import tabBarReducer from './tab/tabBar';
import tabOneReducer from './tab/tabOne';
import tabTwoReducer from './tab/tabTwo';
import tabThreeReducer from './tab/tabThree';
import navReducer from './navigation';

export default combineReducers({
  AUTH: auth,
  COMMON: common,
  PERSIST: persist,
  tabBar: tabBarReducer,
  tabOne: tabOneReducer,
  tabTwo: tabTwoReducer,
  tabThree: tabThreeReducer,
  navigation: navReducer,
});
