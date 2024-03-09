import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "./home/HomeScreen";
import SettingsScreen from "./settings/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({}) => <Feather name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({}) => (
              <Feather name="settings" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
