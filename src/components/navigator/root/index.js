

import React from 'react';
import Actions from 'actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './AppNavigator';

class RootNavigator extends React.Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            dispatch,
            state: navigationState,
          })
        }
      />
    );
  }
}

RootNavigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigationState: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  navigationState: Actions.getRootNavigation(store),
});

export default connect(mapStateToProps)(RootNavigator);
