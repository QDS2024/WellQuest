import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

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

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "MainScreen";

  switch (routeName) {
    case "MainScreen":
      return "Profile";
    case "EditInfo":
      return "Edit Info";
    case "UserSettings":
      return "Settings";
  }
}

export default function Navbar() {
  return (
    <NavigationContainer theme={CustomTheme}>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({}) => <Feather name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Rewards"
          component={RewardsScreen}
          options={{
            tabBarIcon: ({}) => <Feather name="gift" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            tabBarIcon: ({}) => <Feather name="user" size={24} color="black" />,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
