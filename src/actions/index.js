import auth from './auth';
import common from './common';
import nav from './nav';
import persist from './persist';

export default {
  ...auth,
  ...common,
  ...nav,
  ...persist,
};
