import { StackNavigator } from 'react-navigation';
import SignIn from '../auth/SignIn';

const routeConfiguration = {
  SignIn: { screen: SignIn },
};

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'SignIn',
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);

