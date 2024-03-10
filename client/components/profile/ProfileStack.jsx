import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "./ProfileScreen";
import EditInfo from "./EditInfo";
import UserSettings from "./UserSettings";
import Help from "./Help";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditInfo" component={EditInfo} />
      <Stack.Screen name="UserSettings" component={UserSettings} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
}
