import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import HomeScreen from "./home/HomeScreen";
import ProfileStack from "./profile/ProfileStack";
import RewardsScreen from "./rewards/RewardsScreen";
import LoginPage from "./register/Login";

const Tab = createBottomTabNavigator();

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
        component={ProfileStack}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          tabBarIcon: ({}) => <Feather name="user" size={24} color="black" />,
          unmountOnBlur: true,
        })}
      />
      <Tab.Screen
        name="login"
        component={LoginPage}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          tabBarIcon: ({}) => <Feather name="user" size={24} color="black" />,
        })}
      />
    </Tab.Navigator>
  );
}
