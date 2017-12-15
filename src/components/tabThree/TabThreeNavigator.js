import { StackNavigator } from 'react-navigation';
import ScreenOne from './views/ScreenOne';
import ScreenTwo from './views/ScreenTwo';
import ScreenThree from './views/ScreenThree';

const routeConfiguration = {
  TabThreeScreenOne: { screen: ScreenOne },
  TabThreeScreenTwo: { screen: ScreenTwo },
  TabThreeScreenThree: { screen: ScreenThree },
};

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'TabThreeScreenOne',
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);
