import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile136847Navigator from '../features/UserProfile136847/navigator';
import UserProfile136781Navigator from '../features/UserProfile136781/navigator';
import Tutorial136780Navigator from '../features/Tutorial136780/navigator';
import NotificationList136752Navigator from '../features/NotificationList136752/navigator';
import Settings136751Navigator from '../features/Settings136751/navigator';
import Settings136743Navigator from '../features/Settings136743/navigator';
import UserProfile136741Navigator from '../features/UserProfile136741/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile136847: { screen: UserProfile136847Navigator },
UserProfile136781: { screen: UserProfile136781Navigator },
Tutorial136780: { screen: Tutorial136780Navigator },
NotificationList136752: { screen: NotificationList136752Navigator },
Settings136751: { screen: Settings136751Navigator },
Settings136743: { screen: Settings136743Navigator },
UserProfile136741: { screen: UserProfile136741Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
