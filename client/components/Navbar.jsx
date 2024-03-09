import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./home/HomeScreen";
import ProfileScreen from "./profile/ProfileScreen";
import Colors from "../colors";
import RewardsScreen from "./rewards/RewardsScreen";

const Tab = createBottomTabNavigator();

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.black,
    background: Colors.white,
  },
};

export default function Navbar() {
  return (
    <NavigationContainer theme={CustomTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({}) => <Feather name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({}) => <Feather name="user" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Rewards"
          component={RewardsScreen}
          options={{
            tabBarIcon: ({}) => (
              <MaterialCommunityIcons
                name="treasure-chest"
                size={24}
                color="black"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
