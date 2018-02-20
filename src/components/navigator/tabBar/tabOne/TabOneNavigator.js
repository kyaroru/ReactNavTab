import { StackNavigator } from 'react-navigation';
import Home from 'containers/home';
import Detail from 'containers/home/Detail';

const routeConfiguration = {
  Home: { screen: Home },
  Detail: { screen: Detail },
};

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'Home',
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);
