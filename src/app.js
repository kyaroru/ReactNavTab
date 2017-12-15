import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  BackHandler,
  ToastAndroid,
  Platform,
} from 'react-native';
import Actions from 'actions';
import { NavigationActions } from 'react-navigation';
import Spinner from 'common/Spinner';
import RootNavigator from './components/navigator';
import TabBar from './components/tabBar';

class App extends Component {
  constructor() {
    super();
    this.handleBackButton = this.handleBackButton.bind(this);
    this.backButtonExitCount = 0;
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('backPress', this.handleBackButton);
    }
  }

  handleBackButton() {
    const {
      token, dispatch, tabBar, rootNavigation, goBackFromTab, jumpToTab,
    } = this.props;

    if (token !== null) {
      if (tabBar) {
        const currentTabIndex = tabBar.index;
        const currentTabKey = tabBar.routes[currentTabIndex].key;
        const tab = this.props[currentTabKey];
        if (tab.index !== 0) {
          const lastIndex = tab.routes.length - 1;
          const { key } = tab.routes[lastIndex];
          goBackFromTab(currentTabKey, key);
          return true;
        } else if (currentTabKey !== 'TabOne') {
          jumpToTab(0);
          return true;
        }
      }
    } else if (token === null) {
      if (rootNavigation.index !== 0) {
        dispatch(NavigationActions.back());
        return true;
      }
    }
    if (this.backButtonExitCount === 0) {
      ToastAndroid.show('Press again to Exit.', ToastAndroid.SHORT);
      this.backButtonExitCount = 1;
      setTimeout(() => {
        this.backButtonExitCount = 0;
      }, 1000);
      return true;
    }
    return false;
  }

  render() {
    const { isRehydrated, token } = this.props;
    if (isRehydrated) {
      return (
        <View style={{ flex: 1 }}>
          {token === null && <RootNavigator />}
          {token !== null && <TabBar />}
        </View>
      );
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Spinner />
      </View>
    );
  }
}

App.propTypes = {
  token: PropTypes.string,
  isRehydrated: PropTypes.bool.isRequired,
  tabBar: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  rootNavigation: PropTypes.object.isRequired,
  goBackFromTab: PropTypes.func.isRequired,
  jumpToTab: PropTypes.func.isRequired,
};

App.defaultProps = {
  token: null,
};

const mapStateToProps = store => ({
  token: Actions.getToken(store),
  isRehydrated: Actions.isStoreRehydrated(store),
  tabBar: store.tabBar,
  rootNavigation: store.navigation,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    goBackFromTab: Actions.goBackFromTab,
    jumpToTab: Actions.jumpToTab,
  }, dispatch),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
