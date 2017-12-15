import { StackNavigator } from 'react-navigation';
import ScreenOne from './views/ScreenOne';
import ScreenTwo from './views/ScreenTwo';

const routeConfiguration = {
  ScreenOne: { screen: ScreenOne },
  TabOneScreenTwo: { screen: ScreenTwo },
};

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'ScreenOne',
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);
