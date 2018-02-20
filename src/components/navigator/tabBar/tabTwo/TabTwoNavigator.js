import { StackNavigator } from 'react-navigation';
import Favourite from 'containers/favourite';

const routeConfiguration = {
  Favourite: { screen: Favourite },
};

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'Favourite',
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);
