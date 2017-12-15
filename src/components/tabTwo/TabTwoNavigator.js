import { StackNavigator } from 'react-navigation';
import ScreenOne from './views/ScreenOne';
import ScreenTwo from './views/ScreenTwo';

const routeConfiguration = {
  TabTwoScreenOne: { screen: ScreenOne },
  TabTwoScreenTwo: { screen: ScreenTwo },
};

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'TabTwoScreenOne',
};

export default NavigatorTabTwo = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
