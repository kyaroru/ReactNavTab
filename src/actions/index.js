import auth from './auth';
import common from './common';
import persist from './persist';
import * as navigation from './navigation';
import * as tab from './tab';

export default {
  ...auth,
  ...common,
  ...persist,
  ...navigation,
  ...tab,
};
