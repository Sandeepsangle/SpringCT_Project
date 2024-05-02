import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Employee, HomeScreen } from '../../Screens';
const Tab = createBottomTabNavigator();
export default function TabBar(){
    return(
        <Tab.Navigator>
          <Tab.Screen name = "Home" component={HomeScreen} options={{
            headerShown: false,
          }} />
          <Tab.Screen name = "Employee" component={Employee}
          options={{
            headerShown: false,
          }}/>
        </Tab.Navigator> 
    )
}