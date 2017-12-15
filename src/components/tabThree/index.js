import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addNavigationHelpers } from 'react-navigation';
import TabThreeNavigator from './TabThreeNavigator';

class TabThree extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Account',
    tabBarIcon: ({ tintColor }) => <Icon size={20} name="user" color={tintColor} />,
  }

  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <TabThreeNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: navigationState,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  navigationState: state.tabThree,
});

TabThree.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigationState: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(TabThree);
