import { TabNavigator } from 'react-navigation';
import * as Colors from 'themes/colors';
import TabOne from '../tabOne';
import TabTwo from '../tabTwo';
import TabThree from '../tabThree';

const routeConfiguration = {
  TabOne: { screen: TabOne },
  TabTwo: { screen: TabTwo },
  TabThree: { screen: TabThree },
};

const tabBarConfiguration = {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: Colors.primary,
    inactiveTintColor: Colors.secondary,
    showIcon: true,
    // showLabel: false,
    upperCaseLabel: false,
    style: {
      backgroundColor: Colors.black,
    },
    tabStyle: {
      padding: 0,
    },
    indicatorStyle: {
      backgroundColor: Colors.transparent,
    },
    labelStyle: {
      fontSize: 10,
      margin: 0,
      marginBottom: 5,
    },
  },
};

export default TabNavigator(routeConfiguration, tabBarConfiguration);
