import {createDrawerNavigator} from '@react-navigation/drawer';

const DrawerNav = createDrawerNavigator();
export default function DrawerStack(props) {
  return (
    <DrawerNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <Drawer {...props} />}>
      <DrawerNav.Screen name="TabBar" component={TabBar} />
    </DrawerNav.Navigator>
  );
}
