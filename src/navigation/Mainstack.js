import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerStack from './drawerstack';
import { HomeScreen } from '../Screens';
const MainStack = createNativeStackNavigator();
export function MainNavStack(props) {
  return (
    <MainStack.Navigator initialRouteName="Homescreen">
      <MainNavStack.Screen
        name="Drawer"
        component={DrawerStack}
        options={{
          headerShown: false,
        }}
      />
      <MainNavStack.Screen
        name="Homescreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* add screen as per requirement */}
    </MainStack.Navigator>
  );
}
