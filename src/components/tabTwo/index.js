import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addNavigationHelpers } from 'react-navigation';
import TabTwoNavigator from './TabTwoNavigator';

class TabTwo extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Favourite',
    tabBarIcon: ({ tintColor }) => <Icon size={20} name="heart" color={tintColor} />,
  }

  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <TabTwoNavigator
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

TabTwo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigationState: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  navigationState: state.tabTwo,
});

export default connect(mapStateToProps)(TabTwo);
