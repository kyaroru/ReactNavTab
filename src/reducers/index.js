import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import common from './common';
import persist from './persist';
import nav from './nav';

export default {
  AUTH: auth,
  COMMON: common,
  PERSIST: persist,
  form: formReducer,
  NAV: nav,
};
