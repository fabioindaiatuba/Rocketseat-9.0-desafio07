import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
