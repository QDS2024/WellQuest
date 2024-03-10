import React from "react";

import MainPage from "./components/MainPage";
import LoginPage from "./components/register/login";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Colors from "./colors";

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.black,
    background: Colors.white,
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={CustomTheme}>
      <View style={{ flex: 1, paddingTop: 30, backgroundColor: Colors.white }}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Main" component={MainPage} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
