import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "../../colors";
import UserInfo from "./UserInfo";
import EditInfo from "./EditInfo";
import UserSettings from "./UserSettings";

const Stack = createNativeStackNavigator();

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <UserInfo />
      <View style={styles.cards}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("EditInfo")}
        >
          <Text>Edit Info</Text>
          <Feather name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("UserSettings")}
        >
          <Text>Settings</Text>
          <Feather name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => console.log("Help pressed")}
        >
          <Text>Help</Text>
          <Feather name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#8f250c" }]}
          onPress={() => console.log("log out pressed")}
        >
          <Text style={{ fontWeight: "bold", color: Colors.white }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function ProfileScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="EditInfo" component={EditInfo} />
      <Stack.Screen name="UserSettings" component={UserSettings} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 40,
  },
  cards: {
    gap: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.lightGreen,
  },
});
