import { StackNavigator } from 'react-navigation';
import Profile from 'containers/profile';

const routeConfiguration = {
  Profile: { screen: Profile },
};

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'Profile',
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);
