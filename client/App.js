import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Navbar from "./components/Navbar";
import Colors from "./colors";

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.black,
    background: Colors.white,
  },
};

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer theme={CustomTheme}>
        <Navbar />
      </NavigationContainer>
    </View>
  );
}
