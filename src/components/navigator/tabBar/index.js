import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';
import Actions from 'actions';
import TabBarNavigator from './TabBarNavigator';

class TabBar extends React.Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <TabBarNavigator
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

TabBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigationState: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  navigationState: Actions.getTabBarNavigation(store),
});

export default connect(mapStateToProps)(TabBar);
