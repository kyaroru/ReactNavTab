import React from 'react';
import Actions from 'actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addNavigationHelpers } from 'react-navigation';
import TabOneNavigator from './TabOneNavigator';

class TabOne extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => <Icon size={20} name="home" color={tintColor} />,
  }

  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <TabOneNavigator
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

TabOne.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigationState: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  navigationState: Actions.getTabOneNavigation(store),
});

export default connect(mapStateToProps)(TabOne);
